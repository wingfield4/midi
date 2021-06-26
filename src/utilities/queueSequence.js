import { Howler } from 'howler';

import instrumentLibrary from './instrumentLibrary';

const queueSequence = (sequence = [], options) => {
  const {
    beatsPerMinute = 120,
    beatsPerMeasure = 4,
    onEnd,
    delay = 0
  } = options;

  /* preprocessing of sequence */
  if(Howler.ctx)
    Howler.mute(false); //starts the audioContext if not already started

  const scheduledNotes = sequence.map(note => ({
    ...note,
    startTime: Howler.ctx.currentTime + ((note.startMeasure*beatsPerMeasure+note.startBeat) * 60/beatsPerMinute) + delay,
    endTime: Howler.ctx.currentTime + ((note.endMeasure*beatsPerMeasure+note.endBeat) * 60/beatsPerMinute) + delay,
  }))
  let pendingNotes = scheduledNotes.length;

  /* play note and schedule next */
  const playNote = () => {
    let scheduledNote = scheduledNotes.shift();

    //play the note
    instrumentLibrary.playSound(scheduledNote.note);

    //schedule the removal (less time sensitive -- for now)
    setTimeout(() => {
      instrumentLibrary.stopSound(scheduledNote.note);
      pendingNotes--;
      if(pendingNotes <= 0 && onEnd)
        onEnd();
    }, Math.max(0, scheduledNote.endTime - Howler.ctx.currentTime)*1000);

    //schedule the next note
    let nextNote = scheduledNotes[0];
    if(nextNote) {
      setTimeout(() => {
        playNote();
      }, Math.max(0, nextNote.startTime - Howler.ctx.currentTime)*1000)
    }
  }

  /* start sequence */
  if(scheduledNotes.length > 0) {
    setTimeout(() => {
      playNote()
    }, Math.max(0, scheduledNotes[0].startTime - Howler.ctx.currentTime)*1000);
  }
}



export default queueSequence;
