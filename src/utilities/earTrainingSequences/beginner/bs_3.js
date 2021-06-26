import createScheduledNote from '../../createScheduledNote';

const sequence = {
  scheduledNotes: [
    createScheduledNote(0, 0, 0, 1, 60),
    createScheduledNote(0, 1, 0, 2, 67),
    createScheduledNote(0, 2, 0, 3, 65),
    createScheduledNote(0, 3, 1, 0, 62),
    createScheduledNote(1, 0, 1, 1, 64),
  ],
  defaultConfig: {
    beatsPerMinute: 120,
    beatsPerMeasure: 4
  }
};

export default sequence;
