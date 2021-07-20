import { Level } from '../../../components/levels/types';
import * as levels from '../../../components/islands/levels';
import {
  getAccountsCollection,
  getSeasonAccountsCollection,
} from './collection';
import { Ranking } from '../types';
import { Collection, FilterQuery } from 'mongodb';
import { Account, AccountTrophy } from '..';
import { Trophy } from '../../../components/trophies/types';
import { currentSeason } from '../../../../server/version';

export const isLevelNearlyCompleted = (
  level: Level,
  trophiesCompleted: number
) => trophiesCompleted / level.trophies.length >= 0.8;
export const isLevelCompleted = (level: Level, trophiesCompleted: number) =>
  trophiesCompleted / level.trophies.length >= 1;

export const getUnlockedIslandNames = (level) =>
  level.unlocksLevels.map((level) => levels[level.name].island);

const RANKING_LIMIT = 30;
export const getRankings = async (season: string, page: number) => {
  const Accounts = (await (season !== currentSeason
    ? getSeasonAccountsCollection()
    : getAccountsCollection())) as Collection<Account>;
  const query: FilterQuery<Account> = { trophiesCompleted: { $gt: 0 } };
  if (season !== currentSeason) {
    query.season = season;
  }
  const cursor = await Accounts.find(query).sort({
    trophiesCompleted: -1,
    'summoner.revisionDate': -1,
  });
  const count = await cursor.count();
  const pages = Math.round(count / RANKING_LIMIT);
  const data = await cursor
    .skip(page * RANKING_LIMIT)
    .limit(RANKING_LIMIT)
    .map<Ranking>((account) => ({
      summonerName: account.summoner.name,
      platformId: account.summoner.platformId,
      profileIconId: account.summoner.profileIconId,
      islands: account.islands
        .filter((island) => island.status === 'done')
        .map((island) => island.name),
      trophiesCompleted: account.trophiesCompleted,
    }))
    .toArray();

  const hasMore = count - (page + 1) * RANKING_LIMIT > 0;
  return {
    data,
    currentPage: page,
    pages,
    count,
    limit: RANKING_LIMIT,
    hasMore,
  };
};

export const searchRankingBySummonerName = async (
  season: string,
  summonerName: string
) => {
  const Accounts = (await (season !== currentSeason
    ? getSeasonAccountsCollection()
    : getAccountsCollection())) as Collection<Account>;
  const query: FilterQuery<Account> = {
    'summoner.name': new RegExp(summonerName, 'i'),
    trophiesCompleted: { $gt: 0 },
  };
  if (season !== currentSeason) {
    query.season = season;
  }
  return await Accounts.find(query)
    .limit(5)
    .sort({
      trophiesCompleted: -1,
      'summoner.revisionDate': -1,
    })
    .map<Ranking>((account) => ({
      summonerName: account.summoner.name,
      platformId: account.summoner.platformId,
      profileIconId: account.summoner.profileIconId,
      islands: account.islands
        .filter((island) => island.status === 'done')
        .map((island) => island.name),
      trophiesCompleted: account.trophiesCompleted,
    }))
    .toArray();
};
export const trophyToAccountTrophy = (trophy: Trophy): AccountTrophy => ({
  name: trophy.name,
  island: trophy.island,
  level: trophy.level,
  status: 'active',
  progress: 0,
  progressDetails: null,
});
