import React from 'react';
import { Helmet } from 'react-helmet';

import MidiManagers from '../components/managers/MidiManagers';

import PlayAlongComponent from '../components/playAlong/PlayAlongComponent';

const PlayAlong = () => {
  return (
    <>
      {/* metatags */}
      <Helmet>
        <title>Play Along / keyluminate</title>
      </Helmet>

      {/* managers */}
      <MidiManagers />

      {/* components */}
      <PlayAlongComponent />
    </>
  )
}

export default PlayAlong;
