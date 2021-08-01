import React from 'react';

import MidiManagers from '../components/managers/MidiManagers';

import PlayComponent from '../components/play/PlayComponent';

const Demo = () => {
  return (
    <>
      {/* metatags TODO */}

      {/* managers */}
      <MidiManagers />

      {/* components */}
      <PlayComponent />
    </>
  )
}

export default Demo;
