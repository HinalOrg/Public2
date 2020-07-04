import { Trophy } from '../types';
import { getParticipantIdentity } from '../../../api/riot/helpers';

const duelist: Trophy = {
  island: 'combatIsland',
  name: 'duelist',
  level: 'combat2',
  title: 'Duelist',
  description: 'Achieve three solo kills.',
  category: 'combat',
  checkProgress: ({ match, events, account }) => {
    const participantIdentity = getParticipantIdentity(match, account);

    const soloKills = events.filter(
      (event) =>
        event.type === 'CHAMPION_KILL' &&
        event.killerId === participantIdentity.participantId &&
        event.assistingParticipantIds.length === 0
    ).length;
    return soloKills / 3;
  },
  checkLive: ({ events, account }) => {
    const soloKills = events.filter(
      (event) =>
        event.EventName === 'ChampionKill' &&
        event.KillerName === account.summoner.name &&
        event.Assisters.length === 0
    ).length;
    return soloKills / 3;
  },
};

export default duelist;
