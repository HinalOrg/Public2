import { Trophy } from '../types';
import {
  getParticipantKillsAndAssists,
  getParticipantKills,
  getParticipantDeaths,
} from '../../../lib/riot/helpers';

const thePolice: Trophy = {
  island: 'skills',
  name: 'thePolice',
  level: 'skills4',
  title: 'The Police',
  description: 'Take part in at least three shutdown kills.',
  category: 'skills',
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

    return shutDowns / 3;
  },
};

export default thePolice;
