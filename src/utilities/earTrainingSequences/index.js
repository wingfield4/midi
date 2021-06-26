import bs_1 from './beginner/bs_1';
import bs_2 from './beginner/bs_2';
import bs_3 from './beginner/bs_3';
import bs_4 from './beginner/bs_4';
import bs_5 from './beginner/bs_5';
import bs_6 from './beginner/bs_6';

const earTrainingSequences = {
  getRandomSequence: (difficulty = 'beginner') => {
    if(!['beginner'].includes(difficulty))
      return null;

    return earTrainingSequences[difficulty][Math.floor(Math.random()*earTrainingSequences[difficulty].length)];
  },

  beginner: [
    bs_1,
    bs_2,
    bs_3,
    bs_4,
    bs_5,
    bs_6,
  ]
}

export default earTrainingSequences;
