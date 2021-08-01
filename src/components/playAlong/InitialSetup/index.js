import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../common/mui/Button';
import ModeSelect from './ModeSelect';
import SongSelect from './SongSelect';
import StemSelect from './StemSelect';
import Text from '../../common/mui/Text';

import library from '../../../utilities/songs/library';

const InitialSetup = (props) => {
  const [song, setSong] = useState('');
  const [stem, setStem] = useState('');
  const [mode, setMode] = useState('');

  const handleSubmit = () => {
    props.onSubmit({
      song: library[song],
      stem,
      mode
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
        <SelectContainer>
          <SongSelect
            value={song}
            onChange={e => setSong(e.target.value)}
          />
        </SelectContainer>
        <SelectContainer>
          <StemSelect
            disabled={!song}
            song={library[song]}
            value={stem}
            onChange={e => setStem(e.target.value)}
          />
        </SelectContainer>
        <SelectContainer>
          <ModeSelect
            disabled={!song}
            value={mode}
            onChange={e => setMode(e.target.value)}
          />
        </SelectContainer>
      </SettingsContainer>
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        size="large"
        disabled={!song || !stem || !mode}
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

const SelectContainer = styled.div`
  margin: 8px;
`;

const SettingsContainer = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
`;
