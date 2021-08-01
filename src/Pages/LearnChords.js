import React from 'react';
import { Helmet } from 'react-helmet';

import MidiManagers from '../components/managers/MidiManagers';

import LearnChordsComponent from '../components/learnChords/LearnChordsComponent';

const LearnChords = () => {
  return (
    <>
      {/* metatags */}
      <Helmet>
        <title>Learn Chords / keyluminate</title>
      </Helmet>

      {/* managers */}
      <MidiManagers />

      {/* components */}
      <LearnChordsComponent />
    </>
  )
}

export default LearnChords;
