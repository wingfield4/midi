import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Text from '../common/mui/Text';

const WelcomeMessage = (props) => {
  return (
    <Container>
      <Text variant="h2" component="h1">
        Welcome to <span style={{ color: props.colors.accent1 }}>key</span><span style={{ color: props.colors.accent3 }}>luminate</span>
      </Text>
      <Text>
        A different way to learn piano and music theory
      </Text>
    </Container>
  )
}

export default connect(state => ({
  colors: state.colors
}))(WelcomeMessage);

const Container = styled.div`
  max-width: 800px;
  text-align: center;
  padding-bottom: 56px;
`;
