import { Trophy } from '../types';
import { getParticipantByAccount } from '../../../api/riot/helpers';

const radar: Trophy = {
  island: 'teamworkIsland',
  name: 'radar',
  level: 'teamwork4',
  title: 'Radar',
  description: 'Place most wards, control wards and clear most wards.',
  category: 'teamwork',
  checkProgress: ({ match, account }) => {
    const participant = getParticipantByAccount(match, account);

    const maxWardsPlaced = Math.max(
      ...match.participants.map((participant) => participant.stats.wardsPlaced)
    );
    const maxWardsKilled = Math.max(
      ...match.participants.map((participant) => participant.stats.wardsKilled)
    );
    const maxVisionWardsBoughtInGame = Math.max(
      ...match.participants.map(
        (participant) => participant.stats.visionWardsBoughtInGame
      )
    );

    return Number(
      participant.stats.wardsPlaced >= maxWardsPlaced &&
        participant.stats.wardsKilled >= maxWardsKilled &&
        participant.stats.visionWardsBoughtInGame >= maxVisionWardsBoughtInGame
    );
  },
};

export default radar;