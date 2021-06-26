import createScheduledNote from '../../createScheduledNote';

const sequence = {
  scheduledNotes: [
    createScheduledNote(0, 0, 0, 1, 67),
    createScheduledNote(0, 1, 0, 2, 62),
    createScheduledNote(0, 2, 0, 3, 64),
    createScheduledNote(0, 3, 1, 0, 65),
    createScheduledNote(1, 0, 1, 1, 62),
    createScheduledNote(1, 1, 1, 2, 64),
    createScheduledNote(1, 2, 1, 3, 60),
  ],
  defaultConfig: {
    beatsPerMinute: 120,
    beatsPerMeasure: 4
  }
};

export default sequence;
