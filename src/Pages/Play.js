import React from 'react';
import { Helmet } from 'react-helmet';

import MidiManagers from '../components/managers/MidiManagers';

import PlayComponent from '../components/play/PlayComponent';

const Demo = () => {
  return (
    <>
      {/* metatags */}
      <Helmet>
        <title>Just Play / keyluminate</title>
      </Helmet>

      {/* managers */}
      <MidiManagers />

      {/* components */}
      <PlayComponent />
    </>
  )
}

export default Demo;
