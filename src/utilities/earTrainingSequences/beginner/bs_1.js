import createScheduledNote from '../../createScheduledNote';

const sequence = {
  scheduledNotes: [
    createScheduledNote(0, 0, 0, 2, 60),
    createScheduledNote(0, 2, 1, 0, 62),
    createScheduledNote(1, 0, 1, 2, 64),
    createScheduledNote(1, 2, 2, 0, 65),
    createScheduledNote(2, 0, 2, 2, 67),
  ],
  defaultConfig: {
    beatsPerMinute: 240,
    beatsPerMeasure: 4
  }
};

export default sequence;
