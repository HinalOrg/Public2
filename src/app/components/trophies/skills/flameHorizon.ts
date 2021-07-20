import { Trophy } from '../types';
import { getLaneOpponent } from '../../../lib/riot/helpers';

const flameHorizon: Trophy = {
  island: 'skills',
  name: 'flameHorizon',
  level: 'skills3',
  title: 'Flame Horizon',
  description: 'Kill at least 100 more minions than your lane opponent.',
  category: 'skills',
  checkProgress: ({ match, participant }) => {
    const laneOpponent = getLaneOpponent(match.participants, participant);
    if (!laneOpponent) {
      return 0;
    }
    return (
      (participant.stats.totalMinionsKilled +
        participant.stats.neutralMinionsKilled) /
      (laneOpponent.stats.totalMinionsKilled +
        laneOpponent.stats.neutralMinionsKilled +
        100)
    );
  },
};

export default flameHorizon;
