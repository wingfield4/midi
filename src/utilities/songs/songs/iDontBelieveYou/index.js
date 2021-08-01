import full from '../../../../assets/songs/i_dont_believe_you/full.mp3';
import noChords from '../../../../assets/songs/i_dont_believe_you/no_chords.mp3';

import chords from './chords';
import stems from '../../stems';
import { steps } from '../../../notes';

const iDontBelieveYou = {
  bpm: 124,
  chords,
  key: steps.C
};

iDontBelieveYou[stems.FULL] = full;
iDontBelieveYou[stems.NO_CHORDS] = noChords;

export default iDontBelieveYou;
