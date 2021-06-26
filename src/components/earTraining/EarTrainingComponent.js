import React, { useState } from 'react';

import Exercise from './Exercise';
import InitialSetup from './InitialSetup';

import createExercise from '../../utilities/createExercise';

const EarTrainingComponent = () => {
  const [exercise, setExercise] = useState(null);

  const handleSubmit = (options) => {
    setExercise(createExercise(options));
  }

  const handleSuccess = () => {
    setExercise(createExercise(exercise));
  }

  return (
    <>
      {!exercise &&
        <InitialSetup
          onSubmit={handleSubmit}
        />
      }
      {exercise &&
        <Exercise
          exercise={exercise}
          onSuccess={handleSuccess}
        />
      }
    </>
  )
}

export default EarTrainingComponent;
