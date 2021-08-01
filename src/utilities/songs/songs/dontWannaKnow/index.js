import full from '../../../../assets/songs/dont_wanna_know/full.mp3';
import noChords from '../../../../assets/songs/dont_wanna_know/no_chords.mp3';

import chords from './chords';
import stems from '../../stems';
import { steps } from '../../../notes';

const dontWannaKnow = {
  bpm: 90,
  chords,
  key: steps.F
};

dontWannaKnow[stems.FULL] = full;
dontWannaKnow[stems.NO_CHORDS] = noChords;

export default dontWannaKnow;
