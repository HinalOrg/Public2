import { TrophyServer } from '../../types';
import base from './base';
import {
  getParticipantKillsAndAssists,
  getParticipantKills,
  getParticipantDeaths,
} from '../../../../lib/riot/helpers';

const theSheriff: TrophyServer = {
  ...base,
  checkProgress: ({ events, participant }) => {
    const killsAndAssists = getParticipantKillsAndAssists(
      events,
      participant.participantId
    );
    const shutDowns = killsAndAssists.filter((kill) => {
      const killEvents = getParticipantKills(events, kill.victimId);
      const deathEvents = getParticipantDeaths(events, kill.victimId);

      const victimLastDeath = Math.max(
        ...deathEvents.map((victimDeath) =>
          victimDeath.timestamp < kill.timestamp ? victimDeath.timestamp : 0
        )
      );
      const killingSpree = killEvents.filter(
        (victimKill) =>
          victimKill.timestamp > victimLastDeath &&
          victimKill.timestamp < kill.timestamp
      ).length;

      return killingSpree >= 3;
    }).length;

    return shutDowns / 6;
  },
};

export default theSheriff;
