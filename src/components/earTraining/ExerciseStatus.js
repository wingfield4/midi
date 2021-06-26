import React from 'react';
import styled from 'styled-components';

import RefreshIcon from 'mdi-material-ui/Refresh';

import Button from '../common/mui/Button';
import Loading from '../common/Loading';
import Text from '../common/mui/Text';

const ExerciseStatus = (props) => {
  let title = '';
  let subtitle = '';

  switch(props.mode) {
    case modes.LISTEN:
      title = 'Listen Carefully';
      subtitle = `This Melody starts on ${props.rootNote.name}`;
      break;
    case modes.PLAY:
      title = 'Now play it back!';
      subtitle = `This Melody starts on ${props.rootNote.name}`;
      break;
    case modes.FAILURE:
      title = `Oops! Let's try again.`;
      subtitle = 'Start from the beginning.';
      break;
    case modes.SUCCESS:
      title = `Nice job!`;
      subtitle = `Let's try another one.`;
      break;
    default:
  }

  return (
    <Container>
      <Text variant="h4" component="p">{title}</Text>
      <Text variant="subtitle1">{subtitle}</Text>
      <LoadingContainer>
        {(props.mode === modes.LISTEN || props.mode === modes.SUCCESS) && 
          <Loading />
        }
      </LoadingContainer>
      <ButtonsContainer>
        {props.mode === modes.PLAY &&
          <Button
            onClick={props.onReplay}
            variant="contained"
            color="primary"
          >
            <RefreshIcon />
            Listen Again
          </Button>
        }
      </ButtonsContainer>
    </Container>
  )
}

export default ExerciseStatus;

const ButtonsContainer = styled.div`
  height: 48px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  flex-direction: column;
`;

const LoadingContainer = styled.div`
  height: 80px;
`;

const modes = {
  LISTEN: 'listen',
  PLAY: 'play',
  FAILURE: 'failure',
  SUCCESS: 'success'
}
