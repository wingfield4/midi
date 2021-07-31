import full from '../../../../assets/songs/i_dont_believe_you/full.mp3';
import noChords from '../../../../assets/songs/i_dont_believe_you/no_chords.mp3';

import chords from './chords';
import stems from '../../stems';

const iDontBelieveYou = {
  chords
};

iDontBelieveYou.bpm = 124;

iDontBelieveYou[stems.FULL] = full;
iDontBelieveYou[stems.NO_CHORDS] = noChords;

export default iDontBelieveYou;
