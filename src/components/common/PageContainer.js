import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const PageContainer = ({ dispatch, ...props }) => {
  return (
    <Container {...props} />
  )
}

export default connect(state => ({
  colors: state.colors
}))(PageContainer);

const Container = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  background-color: ${props => props.colors.pageBackground};
  padding: 8px;
  padding-top: 56px;
  min-height: calc(100% - 64px);
  overflow-x: hidden;
`;
