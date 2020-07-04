import { Level } from '../../../levels/types';
import { TeamworkIcon, TeamworkMarker } from '../../../levels/teamwork';
import teamwork7 from './teamwork7';
import { annihilation } from '../../../trophies';

const teamwork6: Level = {
  island: 'teamwork',
  name: 'teamwork6',
  title: 'Teamwork island Lvl. 6',
  Icon: TeamworkIcon,
  Marker: TeamworkMarker,
  trophies: [annihilation],
  unlocksLevels: [teamwork7],
};

export default teamwork6;
