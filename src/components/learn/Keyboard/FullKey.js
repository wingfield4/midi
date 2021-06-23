import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const FullKey = ({ active, colors, dispatch }) => (
  <SVG>
    <Rect width="40" height="256" colors={colors} active={active} />
  </SVG>
)

export default connect(state => ({
  colors: state.colors
}))(FullKey);

const Rect = styled(({ active, colors, ...props }) => (
  <rect {...props} />
))`
  ${props => props.active ? '' : 'transition: fill .3s;'}
  fill: ${props => props.active ? props.colors.accent3 : props.colors.pianoWhite};
  stroke: ${props => props.colors.captionText};
  stroke-width: 0px;
`;

const SVG = styled(props => (
  <svg {...props} />
))`
  height: 256px;
  width: 48px;
`;
