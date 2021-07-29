import { TrophyServer } from '../../types';
import base from './base';

const superiorBrain: TrophyServer = {
  ...base,
  checkProgress: ({ participant }) => {
    const damageDealtToTakenRatio =
      participant.stats.totalDamageDealtToChampions /
      Math.max(1, participant.stats.totalDamageTaken);

    return damageDealtToTakenRatio / 2;
  },
};

export default superiorBrain;