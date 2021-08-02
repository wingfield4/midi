import React from 'react';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';

const BlackKey = ({ active, colors, offset, prompt }) => (
  <SVG offset={offset}>
    <Rect colors={colors} active={active} prompt={prompt} />
  </SVG>
)

export default connect(state => ({
  colors: state.colors
}))(BlackKey);

const glow = (colors) => keyframes`
  0% {
    fill: ${colors.pianoBlack};
  }
  100% {
    fill: ${colors.accent2};
  }
`;

const glowAnimation = props => css`
  ${glow(props.colors)} 1.5s infinite alternate;
`;

const Rect = styled(({ active, colors, prompt, ...props }) => (
  <rect
    width="24"
    height="172"
    {...props}
  />
))`
  ${props => props.active ? '' : 'transition: fill .3s;'}
  fill: ${props => props.active ? props.colors.accent3 : props.colors.pianoBlack};
  animation: ${props => !props.active && props.prompt && glowAnimation};
  stroke: ${props => props.colors.captionText};
  stroke-width: 0px;
`;

const SVG = styled(({ offset, ...props }) => (
  <svg {...props} />
))`
  height: 172px;
  width: 24px;
  position: absolute;
  top: 0px;
  left: ${props => (props.offset*48) - 16}px;
`;
