import { Trophy } from '../types';
import { getTrophyProgress } from '../../../lib/accounts/helpers';

const ancient: Trophy = {
  island: 'special',
  name: 'ancient',
  level: 'special4',
  title: 'Ancient',
  description: 'Play 500 matches with the trophy hunter app.',
  category: 'special',
  maxProgress: 500,
  aramSupport: true,
  checkProgress: ({ account }) => {
    const trophyProgress = getTrophyProgress(account, 'ancient');
    return 1 / 500 + trophyProgress;
  },
};

export default ancient;
