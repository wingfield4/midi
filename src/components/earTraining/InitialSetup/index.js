import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../common/mui/Button';
import DifficultySelect from './DifficultySelect';
import Text from '../../common/mui/Text';

const InitialSetup = (props) => {
  const [difficulty, setDifficulty] = useState('beginner');

  const handleSubmit = () => {
    if(props.onSubmit) {
      props.onSubmit({ difficulty });
    }
  }

  return (
    <Container>
      <Text
        variant="h2"
        component="h1"
      >
        Welcome to Ear Training!
      </Text>
      <Text>
        Check the settings below, and hit BEGIN to get started! 
      </Text>
      <SettingsContainer>
        <DifficultySelect
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
        />
      </SettingsContainer>
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        size="large"
      >
        BEGIN
      </Button>
    </Container>
  )
}

export default InitialSetup;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const SettingsContainer = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
`;
