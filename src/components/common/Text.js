import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Text = ({ dispatch, ...props }) => {
  return (
    <StyledText {...props} />
  )
}

export default connect(state => ({
  colors: state.colors
}))(Text);

const StyledText = styled(({ colors, component, ...props }) => {
  switch(component) {
    case 'label':
      return <label {...props} />;
    case 'h1':
      return <h1 {...props} />;
    default:
      return <p {...props} />;
  }
})`
  color: ${props => props.color || props.colors.text};
  font-size: ${props => props.fontSize || '18'}px;
  margin: 0px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
