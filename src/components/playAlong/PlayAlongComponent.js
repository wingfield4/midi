import React, { useState } from 'react';

import Exercise from './Exercise';
import InitialSetup from './InitialSetup';

const PlayAlongComponent = () => {
  const [song, setSong] = useState(null);

  const handleSubmit = ({
    song
  }) => {
    setSong(song);
  }

  return (
    <>
      {!song &&
        <InitialSetup
          onSubmit={handleSubmit}
        />
      }
      {song &&
        <Exercise
          song={song}
        />
      }
    </>
  )
}

export default PlayAlongComponent;
