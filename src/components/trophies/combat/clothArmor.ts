import { Trophy } from '../types';
import { getParticipantByAccount } from '../../../api/riot/helpers';

const clothArmor: Trophy = {
  island: 'combatIsland',
  name: 'clothArmor',
  level: 'combat3',
  title: 'Cloth Armor',
  description:
    'It takes a lot to kill you. On Average you tank more than 10000 damage before going down.',
  category: 'combat',
  checkProgress: ({ match, account }) => {
    const participant = getParticipantByAccount(match, account);

    const damageTankedPerDeath =
      (participant.stats.totalDamageTaken +
        participant.stats.damageSelfMitigated) /
      Math.max(participant.stats.deaths, 1);

    return damageTankedPerDeath / 10000;
  },
};

export default clothArmor;