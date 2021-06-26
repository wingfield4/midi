import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import BlackKey from './BlackKey';
import FullKey from './FullKey';
import LeftKey from './LeftKey';
import RightKey from './RightKey';
import Octave from './Octave';
import SustainPedal from './SustainPedal';

const KEYBOARD_WIDTH = 2650;
const octaves = [2, 3, 4, 5, 6, 7, 8];

const Keyboard = (props) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      console.log('width', width);
      setScale(Math.max(.5, width/KEYBOARD_WIDTH));
    }

    updateScale();
    window.onresize = updateScale;

    return () => {
      window.onresize = null;
    }
  }, [])

  const promptNotes = props.promptNotes || [];
  const midiNotes = props.notes.map(note => note.midiNote);
  return (
    <Container scale={scale}>
      <SustainPedal />
      <KeyboardContainer>
        <LeftKey
          active={midiNotes.includes(21)}
          prompt={promptNotes.includes(21)}
        />
        <BlackKey
          active={midiNotes.includes(22)}
          prompt={promptNotes.includes(22)}
          offset={1}
        />
        <RightKey
          active={midiNotes.includes(23)}
          prompt={promptNotes.includes(23)}
        />
        {octaves.map(octave => (
          <Octave
            key={octave}
            octave={octave}
            activeNotes={midiNotes}
            promptNotes={promptNotes}
          />
        ))}
        <FullKey
          active={midiNotes.includes(108)}
          prompt={promptNotes.includes(108)}
        />
      </KeyboardContainer>
    </Container>
  )
}

export default connect(state => ({
  notes: state.notes
}))(Keyboard);

const Container = styled(({ scale, ...props }) => (
  <div {...props} />
))`
  display: flex;
  transform-origin: top left;
  transform: scale(${props => props.scale});
  -moz-transform: scale(${props => props.scale});
  width: ${props => 100/props.scale}%;
`;

const KeyboardContainer = styled.div`
  height: 256px;
  width: 100%;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;
