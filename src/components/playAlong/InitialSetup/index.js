import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../common/mui/Button';
import SongSelect from './SongSelect';
import Text from '../../common/mui/Text';

import library from '../../../utilities/songs/library';

const InitialSetup = (props) => {
  const [song, setSong] = useState('');

  const handleSubmit = () => {
    props.onSubmit({
      song: library[song]
    });
  }

  return (
    <Container>
      <Text
        variant="h2"
        component="h1"
      >
        Welcome to Play Along!
      </Text>
      <Text>
        Check the settings below, and hit BEGIN to get started! 
      </Text>
      <SettingsContainer>
        <SongSelect
          value={song}
          onChange={e => setSong(e.target.value)}
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
