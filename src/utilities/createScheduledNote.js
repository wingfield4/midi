import createNote from './createNote';

const createScheduledNote = (
  startMeasure,
  startBeat,
  endMeasure,
  endBeat,
  midiNote
) => ({
  startMeasure,
  startBeat,
  endMeasure,
  endBeat,
  note: createNote(midiNote)
})

export default createScheduledNote;
