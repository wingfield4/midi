import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Text from '../../common/mui/Text';

import { notes } from '../../../utilities/notes';
import toRGBA from '../../../utilities/toRGBA';

const ChordPrompt = (props) => {
  return (
    <Container
      style={{
        left: props.prompt.offset,
        transform: `scale(${props.prompt.scale})`,
        MozTransform: `scale(${props.prompt.scale})`
      }}
    >
      <StartContainer
        active={props.prompt.active}
        colors={props.colors}
      >
        <Text color={props.colors.accent1Text} fontSize={36}>
          {notes[props.prompt.chord.root]} {props.prompt.chord.type}
        </Text>
      </StartContainer>
      <TrailContainer
        active={props.prompt.active}
        colors={props.colors}
        width={props.prompt.trail}
      />
    </Container>
  )
}

export default connect(state => ({
  colors: state.colors
}))(ChordPrompt);

const Container = styled(({ ...props }) => (
  <div {...props} />
))`
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
`;

const StartContainer = styled(({ active, colors, ...props }) => (
  <div {...props} />
))`
  border-radius: 128px;
  background-color: ${props => props.active ? props.colors.accent4 : props.colors.accent1};
  height: 256px;
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0px;
`;

const TrailContainer = styled(({ active, colors, width, ...props }) => (
  <div {...props} />
))`
  height: 256px;
  width: ${props => props.width}px;
  border-radius: 128px;
  background-color: ${props => props.active ? toRGBA(props.colors.accent4, .4) : toRGBA(props.colors.accent1, .4)};
  position: absolute;
  left: 0px;
`;
