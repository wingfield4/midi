import chordTypes from './chordTypes';
import mod from './mod';
import { steps as rootNotes } from './notes';

const chordifyWithKey = (notes, key) => {

}

const chordifyWithoutKey = (notes) => {
  let mostLikelyChordValue = 0;
  let mostLikelyChord = null;

  let sortedNotes = notes.sort((a, b) => (a.octave*12 + a.step) - (b.octave*12 + b.step));

  Object.entries(rootNotes).forEach(([ key, rootNoteStep ]) => {
    chordTypes.forEach(chordType => {
      let chordValue = 0;

      chordType.steps.forEach((chordStep, chordStepIndex) => {
        sortedNotes.forEach((note, noteIndex) => {
          if(mod(note.step - rootNoteStep + 1, 12) === chordStep) {
            chordValue += matchValues.MATCHING_STEP;
            if(chordStepIndex === 0 && noteIndex === 0) {
              chordValue += matchValues.MATCHING_BASE_NOTE;
            }
          } else {
            chordValue -= .01
          }
        })
      })

      if(chordValue > mostLikelyChordValue) {
        mostLikelyChordValue = chordValue;
        mostLikelyChord = {
          root: rootNoteStep,
          type: chordType
        }
      }

      chordValue = 0;
    })
  })

  return mostLikelyChord;
}

const chordify = (notes, key) => {
  if(key)
    return chordifyWithKey(notes, key);

  return chordifyWithoutKey(notes);
}

const matchValues = {
  MATCHING_STEP: 1,
  MATCHING_BASE_NOTE: .5,
  VALID_IN_KEY: 2
};

export default chordify;