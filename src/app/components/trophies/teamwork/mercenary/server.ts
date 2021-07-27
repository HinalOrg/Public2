import { TrophyServer } from '../../types';
import base from './base';
import { getParticipantKillsAndAssists } from '../../../../lib/riot/helpers';
import { ARAM_HOWLING_ABYSS } from '../../../../lib/riot/queues';

const mercenary: TrophyServer = {
  ...base,
  checkProgress: ({ match, events, participant }) => {
    const teamParticipantIds = match.participants
      .filter((other) => other.teamId === participant.teamId)
      .map((teammate) => teammate.participantId);

    const killsAndAssists = getParticipantKillsAndAssists(
      events,
      participant.participantId
    ).length;

    const teamkills = events.filter(
      (event) =>
        event.type === 'CHAMPION_KILL' &&
        teamParticipantIds.includes(event.killerId)
    ).length;

    const ratio = match.queueId === ARAM_HOWLING_ABYSS ? 0.75 : 0.66;
    return Number(killsAndAssists / teamkills >= ratio);
  },
};

export default mercenary;
