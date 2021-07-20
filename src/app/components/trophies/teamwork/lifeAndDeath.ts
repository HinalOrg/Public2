import { Trophy } from '../types';
import { findPerk, getTrophyProgress } from '../../../lib/accounts/helpers';

const lifeAndDeath: Trophy = {
  island: 'teamwork',
  name: 'lifeAndDeath',
  level: 'teamwork3',
  title: 'Life And Death',
  description:
    'Deal and heal more than 2500 in total with grasp of the undying (rune).',
  category: 'teamwork',
  maxProgress: 2500,
  checkProgress: ({ participant, account }) => {
    const lifeAndDeath = findPerk(participant, 8437);
    const trophyProgress = getTrophyProgress(account, 'lifeAndDeath');

    return (lifeAndDeath.var1 + lifeAndDeath.var2) / 2500 + trophyProgress;
  },
};

export default lifeAndDeath;
