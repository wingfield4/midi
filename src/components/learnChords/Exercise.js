import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from '../common/mui/Button';
import Keyboard from '../common/Keyboard';
import Text from '../common/mui/Text';

import getRandomChord from '../../utilities/getRandomChord';
import { notes } from '../../utilities/notes';

const Exercise = (props) => {
  const [mode, setMode] = useState(modes.RUNNING);
  const [targetChord, setTargetChord] = useState(getRandomChord());
  const [needHint, setNeedHint] = useState(false);

  useEffect(() => {
    if(mode === modes.RUNNING && props.chord && props.chord.root === targetChord.root && props.chord.type.name === targetChord.type.name) {
      setMode(modes.SUCCESS);
      setNeedHint(false);
      setTimeout(() => {
        setMode(modes.RUNNING);
        setTargetChord(getRandomChord());
      }, 2000)
    }
  }, [props.chord, mode, setMode]);

  let promptNotes = needHint && targetChord.type.steps.map(step => step + 46 + targetChord.root);

  return (
    <>
      <TextContainer>
        {mode === modes.SUCCESS && <Text variant="h2">Nice Job! Now, another one...</Text>}
        {mode === modes.RUNNING && 
          <>
            <Text variant="h2">Play This Chord</Text>
            <Text style={{ fontSize: 28 }}>
              <b>{notes[targetChord.root]} {targetChord.type.name}</b>
            </Text>
            <Button onClick={() => setNeedHint(true)}>
              Need a hint?
            </Button>
          </>
        }
      </TextContainer>
      <Keyboard promptNotes={promptNotes} />
    </>
  )
}

export default connect(state => ({
  chord: state.chord
}))(Exercise);

const modes = {
  RUNNING: 'running',
  STARTING: 'starting',
  SUCCESS: 'success'
}

const TextContainer = styled.div`
  text-align: center;
  height: 160px;
`;
