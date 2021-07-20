import { Trophy } from '../types';
import { getTrophyProgress } from '../../../lib/accounts/helpers';

const celebrity: Trophy = {
  island: 'special',
  name: 'celebrity',
  level: 'special4',
  title: 'Celebrity',
  description: 'Play 100 matches with another trophy hunter.',
  category: 'special',
  maxProgress: 100,
  aramSupport: true,
  checkProgress: ({ account, teammateAccounts }) => {
    const trophyProgress = getTrophyProgress(account, 'celebrity');
    const playedWithTrophyHunter = teammateAccounts.length > 0;
    return +playedWithTrophyHunter / 100 + trophyProgress;
  },
};

export default celebrity;
