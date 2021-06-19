import React from 'react';

import ChordTitle from '../components/demo/ChordTitle';
import Keyboard from '../components/demo/Keyboard';
import MidiSoundManager from '../components/managers/MidiSoundManager';
import SustainPedal from '../components/demo/Keyboard/SustainPedal';

const Demo = (props) => {
  return (
    <div>
      <MidiSoundManager />
      <ChordTitle />
      <Keyboard />
      <SustainPedal />
    </div>
  )
}

export default Demo;