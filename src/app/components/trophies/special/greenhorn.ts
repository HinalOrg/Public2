import { Trophy } from '../types';
import { getTrophyProgress } from '../../../lib/accounts/helpers';

const greenhorn: Trophy = {
  island: 'hub',
  name: 'greenhorn',
  level: 'hubSpecial',
  title: 'Greenhorn',
  description: 'Play ten matches with the trophy hunter app.',
  category: 'special',
  maxProgress: 10,
  aramSupport: true,
  checkProgress: ({ account }) => {
    const trophyProgress = getTrophyProgress(account, 'greenhorn');
    return 1 / 10 + trophyProgress;
  },
};

export default greenhorn;
