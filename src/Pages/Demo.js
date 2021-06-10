import React from 'react';

import ChordTitle from '../components/demo/ChordTitle';
import Keyboard from '../components/demo/Keyboard';
import MidiSoundManager from '../components/managers/MidiSoundManager';

const Demo = (props) => {
  return (
    <div>
      <MidiSoundManager />
      <ChordTitle />
      <Keyboard />
    </div>
  )
}

export default Demo;