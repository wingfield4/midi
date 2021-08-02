import chordDefinitions from './chordDefinitions';
import { steps } from './notes';

const getRandomChord = () => {
  let chordDefIndex = Math.floor(Math.random()*chordDefinitions.length);
  let stepIndex = Math.floor(Math.random()*Object.entries(steps).length);

  return {
    root: Object.entries(steps)[stepIndex][1],
    type: chordDefinitions[chordDefIndex]
  }
}

export default getRandomChord;
