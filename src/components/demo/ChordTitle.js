import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Text from '../common/mui/Text';

import { notes } from '../../utilities/notes';

const ChordTitle = (props) => {
  return (
    <Container>
      <InnerContainer colors={props.colors}>
        {props.chord && 
          <Text fontSize={36} color={props.colors.accent3}>
            {notes[props.chord.root]} {props.chord.type.name}
          </Text>
        }
      </InnerContainer>
    </Container>
  )
}

export default connect(state => ({
  chord: state.chord,
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
