import full from '../../../../assets/songs/dont_wanna_know/full.mp3';
import noChords from '../../../../assets/songs/dont_wanna_know/no_chords.mp3';

import chords from './chords';

import stems from '../../stems';

const dontWannaKnow = {
  chords
};

dontWannaKnow.bpm = 90;

dontWannaKnow[stems.FULL] = full;
dontWannaKnow[stems.NO_CHORDS] = noChords;

export default dontWannaKnow;
