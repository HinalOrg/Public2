import { Level } from '../../../levels/types';
import { SpecialIcon, SpecialMarker } from '../../../levels/special';
import { special1 } from '../../special/levels';

const hubSpecial: Level = {
  island: 'hub',
  name: 'hubSpecial',
  title: 'Special',
  Icon: SpecialIcon,
  Marker: SpecialMarker,
  trophies: [
    /* */
  ],
  unlocksLevels: [special1],
};

export default hubSpecial;