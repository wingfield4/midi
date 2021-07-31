import React from 'react';

import MidiManagers from '../components/managers/MidiManagers';

import PlayAlongComponent from '../components/playAlong/PlayAlongComponent';

const PlayAlong = () => {
  return (
    <>
      {/* metatags */}

      {/* managers */}
      <MidiManagers />

      {/* components */}
      <PlayAlongComponent />
    </>
  )
}

export default PlayAlong;
