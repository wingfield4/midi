import React from 'react';

import InstrumentManager from '../components/managers/MidiManagers/InstrumentManager';

import EarTrainingComponent from '../components/earTraining/EarTrainingComponent';

const EarTraining = () => {
  return (
    <>
      {/* metatags */}

      {/* Managers */}
      <InstrumentManager />

      {/* components */}
      <EarTrainingComponent />
    </>
  )
}

export default EarTraining;
