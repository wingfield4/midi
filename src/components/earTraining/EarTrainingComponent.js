import React, { useState } from 'react';

import Exercise from './Exercise';
import InitialSetup from './InitialSetup';

const EarTrainingComponent = () => {
  const [exercise, setExercise] = useState(null);

  return (
    <>
      {!exercise &&
        <InitialSetup
          onSubmit={exercise => setExercise(exercise)}
        />
      }
      {exercise &&
        <Exercise
          exercise={exercise}
        />
      }
    </>
  )
}

export default EarTrainingComponent;
