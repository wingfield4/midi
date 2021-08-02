import React from 'react';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';

const FullKey = ({ active, colors, prompt }) => (
  <SVG>
    <Rect width="40" height="256" colors={colors} active={active} prompt={prompt} />
  </SVG>
)

export default connect(state => ({
  colors: state.colors
}))(FullKey);

const glow = (colors) => keyframes`
  0% {
    fill: ${colors.pianoWhite};
  }
  100% {
    fill: ${colors.accent2};
  }
`;

const glowAnimation = props => css`
  ${glow(props.colors)} 1.5s infinite alternate;
`;

const Rect = styled(({ active, colors, prompt, ...props }) => (
  <rect {...props} />
))`
  ${props => props.active ? '' : 'transition: fill .3s;'}
  fill: ${props => props.active ? props.colors.accent3 : props.colors.pianoWhite};
  animation: ${props => !props.active && props.prompt && glowAnimation};
  stroke: ${props => props.colors.captionText};
  stroke-width: 0px;
`;

const SVG = styled(props => (
  <svg {...props} />
))`
  height: 256px;
  width: 48px;
`;
