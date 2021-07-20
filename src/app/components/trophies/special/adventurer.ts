import { Trophy } from '../types';
import { getTrophyProgress } from '../../../lib/accounts/helpers';

const adventurer: Trophy = {
  island: 'special',
  name: 'adventurer',
  level: 'special1',
  title: 'Adventurer',
  description: 'Play 30 matches with the trophy hunter app.',
  category: 'special',
  maxProgress: 30,
  aramSupport: true,
  checkProgress: ({ account }) => {
    const trophyProgress = getTrophyProgress(account, 'adventurer');
    return 1 / 30 + trophyProgress;
  },
};

export default adventurer;
