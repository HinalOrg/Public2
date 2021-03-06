import { TrophyServer } from '../../types';
import base from './base';
import { getParticipantKills } from '../../../../lib/riot/helpers';

const shockwave: TrophyServer = {
  ...base,
  checkProgress: ({ events, participant }) => {
    const kills = getParticipantKills(events, participant.participantId);

    const shockwaveKills = kills.filter((kill, index) => {
      if (index === 0) {
        return false;
      }
      const previousKill = kills[index - 1];
      const in1SecFromEachOther =
        kill.timestamp - previousKill.timestamp <= 1000;
      const sufficientClose =
        Math.sqrt(
          (kill.position.x - previousKill.position.x) *
            (kill.position.x - previousKill.position.x) +
            (kill.position.y - previousKill.position.y) *
              (kill.position.y - previousKill.position.y)
        ) <= 350;
      return in1SecFromEachOther && sufficientClose;
    }).length;
    return shockwaveKills;
  },
};

export default shockwave;
