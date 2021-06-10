import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Text from '../common/Text';

import chordify from '../../utilities/chordify';
import { notes } from '../../utilities/notes';

const ChordTitle = (props) => {
  const [chord, setChord] = useState(null);

  useEffect(() => {
    setChord(chordify(props.notes));
  }, [props.notes])

  return (
    <Container>
      <InnerContainer colors={props.colors}>
        {chord && 
          <Text fontSize={36} color={props.colors.accent3}>
            {notes[chord.root]} {chord.type.name}
          </Text>
        }
      </InnerContainer>
    </Container>
  )
}

export default connect(state => ({
  colors: state.colors,
  notes: state.notes
}))(ChordTitle);

const Container = styled.div`
  height: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px;
  margin-bottom: 64px;
`;

const InnerContainer = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  background-color: ${props => props.colors.widgetBackground};
  height: 256px;
  width: 256px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8px;
  border: 2px solid ${props => props.colors.captionText};
`;
// box-shadow: 0px 0px 128px -16px ${props => props.colors.captionText};