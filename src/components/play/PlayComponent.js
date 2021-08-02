import React from 'react';
import styled from 'styled-components';

import ChordTitle from '../common/ChordTitle';
import Keyboard from '../common/Keyboard';

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
  margin-top: 16px;
  margin-bottom: 16px;
`;
