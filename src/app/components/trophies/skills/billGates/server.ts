import { TrophyServer } from '../../types';
import base from './base';

const billGates: TrophyServer = {
  ...base,
  checkProgress: ({ participant }) => {
    return participant.stats.goldEarned / 20000;
  },
};

export default billGates;
