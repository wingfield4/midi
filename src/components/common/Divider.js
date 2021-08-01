import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Divider = (props) => {
  return (
    <Container colors={props.colors} />
  )
}

export default connect(state => ({
  colors: state.colors
}))(Divider);

const Container = styled(({ colors, ...props }) => (
  <div {...props } />
))`
  margin-top: 16px;
  margin-bottom: 16px;
  height: 1px;
  background-color: ${props => props.colors.captionText};
  width: 100%;
  max-width: 720px;
`;
