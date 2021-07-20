import { Trophy } from '../types';
import { getTrophyProgress } from '../../../lib/accounts/helpers';

const master: Trophy = {
  island: 'special',
  name: 'master',
  level: 'special3',
  title: 'Master',
  description: 'Play 200 matches with the trophy hunter app.',
  category: 'special',
  maxProgress: 200,
  aramSupport: true,
  checkProgress: ({ account }) => {
    const trophyProgress = getTrophyProgress(account, 'master');
    return 1 / 200 + trophyProgress;
  },
};

export default master;
