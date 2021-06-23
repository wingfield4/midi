import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const BlackKey = ({ active, colors, offset }) => (
  <SVG offset={offset}>
    <Rect colors={colors} active={active} />
  </SVG>
)

export default connect(state => ({
  colors: state.colors
}))(BlackKey);

const Rect = styled(({ active, colors, ...props }) => (
  <rect
    width="24"
    height="172"
    {...props}
  />
))`
  ${props => props.active ? '' : 'transition: fill .3s;'}
  fill: ${props => props.active ? props.colors.accent3 : props.colors.pianoBlack};
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
