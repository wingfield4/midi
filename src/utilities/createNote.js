import moment from 'moment';

import { notes } from './notes';

const createNote = (midiNote, velocity) => {
  return {
    octave: Math.floor(midiNote / 12),
    step: (midiNote % 12) + 1, //gets step from C within octave
    name: notes[(midiNote % 12) + 1],
    midiNote,
    velocity,
    createdAt: moment()
  }
}

export default createNote;