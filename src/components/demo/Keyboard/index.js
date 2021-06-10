import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import BlackKey from './BlackKey';
import LeftKey from './LeftKey';
import RightKey from './RightKey';
import Octave from './Octave';

const octaves = [2, 3, 4, 5, 6, 7, 8];

const Keyboard = (props) => {
  const midiNotes = props.notes.map(note => note.midiNote);

  return (
    <Container>
      <LeftKey
        active={midiNotes.includes(21)}
      />
      <BlackKey
        active={midiNotes.includes(22)}
        offset={1}
      />
      <RightKey
        active={midiNotes.includes(23)}
      />
      {octaves.map(octave => (
        <Octave
          key={octave}
          octave={octave}
          activeNotes={midiNotes}
        />
      ))}
    </Container>
  )
}

export default connect(state => ({
  notes: state.notes
}))(Keyboard);

const Container = styled.div`
  height: 256px;
  width: 100%;
  position: relative;
  overflow-x: auto;
  overflow-y: none;
  white-space: nowrap;
  zoom: .68;
`;
