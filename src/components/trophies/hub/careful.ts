import { Trophy } from '../types';
import SkillsProgress from '../skills/SkillsProgress';

const careful: Trophy = {
  island: 'hubIsland',
  name: 'careful',
  level: 'hubSkills',
  title: 'Careful',
  description: 'Have the least number of deaths.',
  ProgressIcon: SkillsProgress,
  checkProgress: ({ match, account }) => {
    const participantIdentity = match.participantIdentities.find(
      (participantIdentity) =>
        participantIdentity.player.accountId === account.summoner.accountId
    );
    const participant = match.participants.find(
      (participant) =>
        participant.participantId === participantIdentity.participantId
    );
    const lessDeaths = match.participants.find(
      (otherParticipant) =>
        otherParticipant.participantId !== participant.participantId &&
        otherParticipant.stats.deaths < participant.stats.deaths
    );

    return Number(!lessDeaths);
  },
};

export default careful;