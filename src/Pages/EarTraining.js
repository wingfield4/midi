import React from 'react';
import { Helmet } from 'react-helmet';

import InstrumentManager from '../components/managers/MidiManagers/InstrumentManager';

import EarTrainingComponent from '../components/earTraining/EarTrainingComponent';

const EarTraining = () => {
  return (
    <>
      {/* metatags */}
      <Helmet>
        <title>Train Your Ear / keyluminate</title>
      </Helmet>

      {/* Managers */}
      <InstrumentManager />

      {/* components */}
      <EarTrainingComponent />
    </>
  )
}

export default EarTraining;
