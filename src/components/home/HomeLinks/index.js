import React from 'react';
import styled from 'styled-components';

import HomeLink from './HomeLink';

const HomeLinks = () => {
  return (
    <Container>
      <HomeLink to="/play" label="Just Play" />
      <HomeLink to="/learnChords" label="Learn Chords" />
      <HomeLink to="/playAlong" label="Play Along" />
      <HomeLink to="/earTraining" label="Train Your Ear" />
    </Container>
  )
}

export default HomeLinks;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
