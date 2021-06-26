import earTrainingSequences from './earTrainingSequences';

const createExercise = (options = {}) => {
  const {
    difficulty
  } = options;

  //do some stuff

  return {
    difficulty,
    sequence: earTrainingSequences.getRandomSequence(difficulty)
  }
}

export default createExercise;
