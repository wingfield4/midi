import React from 'react';
import styled from 'styled-components';

import Divider from '../common/Divider';
import HomeLinks from './HomeLinks';
import GetStarted from './GetStarted';
import WelcomeMessage from './WelcomeMessage';

const HomeComponent = () => {
  return (
    <Container>
      <WelcomeMessage />
      <Divider />
      <GetStarted />
      <HomeLinks />
    </Container>
  )
}

export default HomeComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
