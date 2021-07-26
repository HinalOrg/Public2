import { TrophyServer } from '../../types';
import base from './base';

const dominating: TrophyServer = {
  ...base,
  checkProgress: ({ participant }) => {
    return participant.stats.largestKillingSpree / 6;
  },
};

export default dominating;
