import React from 'react';

import ChordManager from './ChordManager';
import InputManager from './InputManager';
import InstrumentManager from './InstrumentManager';
import MidiManager from './MidiManager';
import MidiSoundManager from './MidiSoundManager';

const MidiManagers = () => {
  return (
    <>
      <ChordManager />
      <InputManager />
      <InstrumentManager />
      <MidiManager />
      <MidiSoundManager />
    </>
  )
}

export default MidiManagers;
