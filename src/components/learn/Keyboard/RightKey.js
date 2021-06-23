import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const RightKey = ({ active, colors, dispatch, ...props }) => (
  <SVG>
    <Rect y="176" width="14" height="80" colors={colors} active={active} />
    <Rect x="13" width="28" height="256" colors={colors} active={active}  />
  </SVG>
)

export default connect(state => ({
  colors: state.colors
}))(RightKey);

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
