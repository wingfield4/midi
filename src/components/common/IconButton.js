import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from './Button';

const IconButton = ({ dispatch, ...props }) => {
  return (
    <Container {...props} />
  )
}

export default connect(state => ({
  colors: state.colors
}))(IconButton);

const Container = styled(({ colors, ...props }) => (
  <Button textButton={false} {...props} />
))`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color .25s;
  outline: 0px;
  background-color: rgba(0, 0, 0, 0);
  color: ${props => props.color || props.colors.text};
  &:hover {
    cursor: pointer;
    background-color: ${props => props.colors.highlightBackground};
  }
`;
