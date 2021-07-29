import { TrophyServer } from '../../types';
import base, { REQUIRED_MINUTES } from './base';
import { minutesToSeconds } from '../../../../lib/utils/dates';

const curse: TrophyServer = {
  ...base,
  checkProgress: ({ participant }) => {
    return (
      participant.stats.totalTimeCrowdControlDealt /
      minutesToSeconds(REQUIRED_MINUTES)
    );
  },
};

export default curse;