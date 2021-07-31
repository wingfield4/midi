import chordTypes from '../../../chordTypes';
import { steps } from '../../../notes';

const chords = [
  {
    root: steps.F,
    type: chordTypes.MAJOR,
    start: 0,
    end: 2600
  },
  {
    root: steps.G,
    type: chordTypes.MAJOR7,
    start: 2600,
    end: 5200
  },
  {
    root: steps.D,
    type: chordTypes.MINOR7,
    start: 5200,
    end: 7800
  },
  {
    root: steps.B_FLAT,
    type: chordTypes.MAJOR7,
    start: 7800,
    end: 9100
  },
  {
    root: steps.C,
    type: chordTypes.MAJOR7,
    start: 9100,
    end: 10400
  },
];

export default chords;
