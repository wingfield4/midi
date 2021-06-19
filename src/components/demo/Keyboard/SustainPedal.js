import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const SustainPedal = ({ colors, dispatch, sustain, ...props }) => (
  <SVG>
    <Rect width="64" height="128" colors={colors} active={sustain} />
  </SVG>
)

export default connect(state => ({
  colors: state.colors,
  sustain: state.sustain
}))(SustainPedal);

const Rect = styled(({ active, colors, ...props }) => (
  <rect {...props} />
))`
  ${props => props.active ? '' : 'transition: fill .3s;'}
  fill: ${props => props.active ? props.colors.accent2 : props.colors.pianoWhite};
  stroke: ${props => props.colors.captionText};
  stroke-width: 0px;
`;

const SVG = styled(props => (
  <svg {...props} />
))`
  height: 128px;
  width: 64px;
  margin: 16px;
  margin-left: 0px;
`;
