import React from 'react';
import styled from 'styled-components';

import ChordTitle from '../learn/ChordTitle';
import Keyboard from '../learn/Keyboard';

const PlayComponent = () => {
  return (
    <>
      <ChordTitleContainer>
        <ChordTitle />
      </ChordTitleContainer>
      <Keyboard />
    </>
  )
}

export default PlayComponent;

const ChordTitleContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;
