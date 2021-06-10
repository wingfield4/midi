import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Text from './Text';

const Button = ({ children, dispatch, textButton = true, ...props }) => {
  return (
    <StyledButton {...props} >
      {textButton && <Text color={props.colors.accent1Text} fontSize={16}>{children.toUpperCase()}</Text>}
      {!textButton && children}
    </StyledButton>
  )
}

export default connect(state => ({
  colors: state.colors
}))(Button);

const StyledButton = styled(({ colors, ...props }) => (
  <button {...props} />
))`
  font-family: 'Josefin Slab', serif;
  font-weight: 500;
  font-size: 18px;
  padding: 4px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${props => props.colors.accent1};
  border: none;
  outline: 2px solid ${props => props.colors.border};
  transition: opacity .15s;
  margin: 8px;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }

  &:active {
    opacity: .6;
  }

  &:focus {
    outline-color: ${props => props.colors.accent4};
  }
`;
