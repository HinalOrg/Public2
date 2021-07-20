import { Trophy } from '../types';
import { calcTotalGoldFrames } from '../../../lib/riot/helpers';
import { zip } from '../../../lib/utils/arrays';

const rivalry: Trophy = {
  island: 'skills',
  name: 'rivalry',
  level: 'skills2',
  title: 'Rivalry',
  description:
    'Win a game where the gold difference in the first 15 minutes was always less than 2000.',
  category: 'skills',
  checkProgress: ({ match, timeline, participant }) => {
    const team = match.teams.find((team) => team.teamId === participant.teamId);
    const opponent = match.teams.find(
      (team) => team.teamId !== participant.teamId
    );

    const teamGoldFrames = calcTotalGoldFrames(timeline, team.teamId);
    const opponentGoldFrames = calcTotalGoldFrames(timeline, opponent.teamId);

    const teamGoldDiffFrames = zip(teamGoldFrames, opponentGoldFrames).map(
      (frame) => frame[0] - frame[1]
    );

    const isRivalry = teamGoldDiffFrames
      .slice(0, 15)
      .every((diff) => Math.abs(diff) < 2000);

    return Number(isRivalry && participant.stats.win);
  },
};

export default rivalry;
