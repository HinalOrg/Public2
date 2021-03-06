import { TrophyClient } from '../../types';
import base from './base';

const sigurd: TrophyClient = {
  ...base,
  checkLive: ({ events, allPlayers, account }) => {
    const accountPlayer = allPlayers.find(
      (player) => player.summonerName === account.summoner.name
    );

    const teamNames = allPlayers
      .filter((player) => player.team === accountPlayer.team)
      .map((player) => player.summonerName);

    const firstDragonKill = events.find(
      (event) => event.EventName === 'DragonKill'
    );
    if (firstDragonKill && !teamNames.includes(firstDragonKill.KillerName)) {
      return 0;
    }

    const dragonKills = events.filter(
      (event) =>
        event.EventName === 'DragonKill' &&
        event.DragonType === 'Water' &&
        teamNames.includes(event.KillerName)
    ).length;
    const baronKills = events.filter(
      (event) =>
        event.EventName === 'BaronKill' && teamNames.includes(event.KillerName)
    ).length;

    return (1 + Math.min(1, dragonKills / 5) + Math.min(1, baronKills)) / 3;
  },
};

export default sigurd;
