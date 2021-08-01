import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Divider = ({ colors, ...props }) => {
  return (
    <Container
      colors={colors}
      {...props}
    />
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
  background-color: ${props => props.colors.border};
  width: 100%;
  max-width: 720px;
`;
