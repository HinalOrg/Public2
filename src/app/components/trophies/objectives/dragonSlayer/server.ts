import { TrophyServer } from '../../types';
import base from './base';
import { getTeam } from '../../../../lib/riot/helpers';

const dragonSlayer: TrophyServer = {
  ...base,
  checkProgress: ({ match, events, participant }) => {
    const teamIds = getTeam(match, participant.teamId).map(
      (teammate) => teammate.participantId
    );

    const dragonKills = events.filter(
      (event) =>
        event.type === 'ELITE_MONSTER_KILL' &&
        event.monsterType === 'DRAGON' &&
        teamIds.includes(event.killerId)
    ).length;

    return dragonKills / 4;
  },
};

export default dragonSlayer;
