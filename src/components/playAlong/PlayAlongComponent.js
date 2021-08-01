import React, { useState } from 'react';

import Exercise from './Exercise';
import InitialSetup from './InitialSetup';

const PlayAlongComponent = () => {
  const [song, setSong] = useState(null);
  const [stem, setStem] = useState(null);
  const [mode, setMode] = useState(null);

  const handleSubmit = ({
    song,
    stem,
    mode
  }) => {
    setSong(song);
    setStem(stem);
    setMode(mode);
  }

  return (
    <>
      {!song &&
        <InitialSetup
          onSubmit={handleSubmit}
        />
      }
      {song && stem && mode && 
        <Exercise
          song={song}
          stem={stem}
          mode={mode}
        />
      }
    </>
  )
}

export default PlayAlongComponent;
