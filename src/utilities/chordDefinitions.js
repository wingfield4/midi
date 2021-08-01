import chordTypes from './chordTypes';

const chordDefinitions = [
  {
    name: chordTypes.NONE,
    steps: [1]
  },

  {
    name: chordTypes.FIVE,
    steps: [1, 8]
  },

  {
    name: chordTypes.MAJOR,
    steps: [1, 5, 8]
  },
  {
    name: chordTypes.MINOR,
    steps: [1, 4, 8]
  },
  {
    name: chordTypes.SUS,
    steps: [1, 6, 8]
  },
  {
    name: chordTypes.SUS2,
    steps: [1, 3, 8]
  },
  {
    name: chordTypes.DIMINISHED,
    steps: [1, 4, 7]
  },

  {
    name: chordTypes.ADD9,
    steps: [1, 3, 5, 8]
  },
  {
    name: chordTypes.MAJOR7,
    steps: [1, 5, 8, 11]
  },
  {
    name: chordTypes.SIX,
    steps: [1, 5, 8, 10]
  },
  {
    name: chordTypes.SEVEN,
    steps: [1, 5, 8, 0]
  },
  {
    name: chordTypes.MINOR7,
    steps: [1, 4, 8, 11]
  }
]

export default chordDefinitions;
