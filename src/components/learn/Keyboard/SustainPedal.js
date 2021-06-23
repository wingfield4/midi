import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Text from '../../common/mui/Text';

const SustainPedal = ({ colors, dispatch, sustain, ...props }) => (
  <Container>
    <SVG>
      <Rect width="96" height="256" colors={colors} active={sustain} />
    </SVG>
    <LabelContainer>
      <Label fontSize={24}>Sust.</Label>
    </LabelContainer>
  </Container>
)

export default connect(state => ({
  colors: state.colors,
  sustain: state.sustain
}))(SustainPedal);

const Container = styled.div`
  position: relative;
  margin-right: 24px;
  width: 96px;
`;

const Rect = styled(({ active, colors, ...props }) => (
  <rect {...props} />
))`
  ${props => props.active ? '' : 'transition: fill .3s;'}
  fill: ${props => props.active ? props.colors.accent3 : props.colors.pianoWhite};
  stroke: ${props => props.colors.captionText};
  stroke-width: 0px;
`;

const Label = styled(Text)`
  && {
    font-style: italic;
  }
`;

const LabelContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SVG = styled(props => (
  <svg {...props} />
))`
  height: 256px;
  width: 96px;
`;
