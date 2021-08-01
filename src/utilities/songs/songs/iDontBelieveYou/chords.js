import chordTypes from '../../../chordTypes';
import { steps } from '../../../notes';

const MSPB = 60/124*1000;

const chords = [
  /* VERSE 1 */
  /* MEASURE 2 */
  {
    root: steps.C,
    type: chordTypes.MAJOR,
    start: MSPB*16,
    end: MSPB*20
  },
  {
    root: steps.D,
    type: chordTypes.MINOR7,
    start: MSPB*20,
    end: MSPB*24
  },
  {
    root: steps.A,
    type: chordTypes.MINOR,
    start: MSPB*24,
    end: MSPB*28
  },
  {
    root: steps.F,
    type: chordTypes.MAJOR,
    start: MSPB*28,
    end: MSPB*32
  },
  
  /* MEASURE 3 */
  {
    root: steps.C,
    type: chordTypes.MAJOR,
    start: MSPB*32,
    end: MSPB*36
  },
  {
    root: steps.D,
    type: chordTypes.MINOR7,
    start: MSPB*36,
    end: MSPB*40
  },
  {
    root: steps.A,
    type: chordTypes.MINOR,
    start: MSPB*40,
    end: MSPB*44
  },
  {
    root: steps.F,
    type: chordTypes.MAJOR,
    start: MSPB*44,
    end: MSPB*48
  },
  
  /* MEASURE 4 */
  {
    root: steps.C,
    type: chordTypes.MAJOR,
    start: MSPB*48,
    end: MSPB*52
  },
  {
    root: steps.D,
    type: chordTypes.MINOR7,
    start: MSPB*52,
    end: MSPB*56
  },
  {
    root: steps.A,
    type: chordTypes.MINOR,
    start: MSPB*56,
    end: MSPB*60
  },
  {
    root: steps.F,
    type: chordTypes.MAJOR,
    start: MSPB*60,
    end: MSPB*64
  },
  
  /* MEASURE 5 */
  {
    root: steps.C,
    type: chordTypes.MAJOR,
    start: MSPB*64,
    end: MSPB*68
  },
  {
    root: steps.D,
    type: chordTypes.MINOR7,
    start: MSPB*68,
    end: MSPB*72
  },
  {
    root: steps.A,
    type: chordTypes.MINOR,
    start: MSPB*72,
    end: MSPB*76
  },
  {
    root: steps.F,
    type: chordTypes.MAJOR,
    start: MSPB*76,
    end: MSPB*80
  },

  /* MEASURE 6 */
  {
    root: steps.C,
    type: chordTypes.MAJOR,
    start: MSPB*80,
    end: MSPB*84
  },
  {
    root: steps.D,
    type: chordTypes.MINOR7,
    start: MSPB*84,
    end: MSPB*88
  },
  {
    root: steps.A,
    type: chordTypes.MINOR,
    start: MSPB*88,
    end: MSPB*92
  },
  {
    root: steps.F,
    type: chordTypes.MAJOR,
    start: MSPB*92,
    end: MSPB*96
  },

  /* PRECHORUS 1 */
  /* MEASURE 7 */
  {
    root: steps.C,
    type: chordTypes.MAJOR,
    start: MSPB*96,
    end: MSPB*100
  },
  {
    root: steps.D,
    type: chordTypes.MINOR7,
    start: MSPB*100,
    end: MSPB*104
  },
  {
    root: steps.A,
    type: chordTypes.MINOR,
    start: MSPB*104,
    end: MSPB*108
  },
  {
    root: steps.F,
    type: chordTypes.MAJOR,
    start: MSPB*108,
    end: MSPB*112
  },

  /* MEASURE 8 */
  {
    root: steps.C,
    type: chordTypes.MAJOR,
    start: MSPB*112,
    end: MSPB*116
  },
  {
    root: steps.D,
    type: chordTypes.MINOR7,
    start: MSPB*116,
    end: MSPB*120
  },
  {
    root: steps.A,
    type: chordTypes.MINOR,
    start: MSPB*120,
    end: MSPB*124
  },
  {
    root: steps.F,
    type: chordTypes.MAJOR,
    start: MSPB*124,
    end: MSPB*124
  },

  /* CHORUS 1 */
  /* MEASURE 9 */
  {
    root: steps.C,
    type: chordTypes.MAJOR,
    start: MSPB*128,
    end: MSPB*132
  },
  {
    root: steps.D,
    type: chordTypes.MINOR7,
    start: MSPB*132,
    end: MSPB*136
  },
  {
    root: steps.A,
    type: chordTypes.MINOR,
    start: MSPB*136,
    end: MSPB*140
  },
  {
    root: steps.F,
    type: chordTypes.MAJOR,
    start: MSPB*140,
    end: MSPB*144
  },
];

export default chords;
