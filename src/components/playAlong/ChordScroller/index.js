import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ChordPrompt from './ChordPrompt';
import ChordTitle from '../../common/ChordTitle';

import createTimer from '../../../utilities/createTimer';
import easeInQuad from '../../../utilities/animation/easeInQuad';
import easeOutQuad from '../../../utilities/animation/easeOutQuad';
import linear from '../../../utilities/animation/linear';
import playAlongStatuses from '../../../utilities/playAlongStatuses';
import useAnimationFrame from '../../../utilities/useAnimationFrame';

const ChordScroller = (props) => {
  const [prompts, setPrompts] = useState([]);

  useAnimationFrame(deltaTime => {
    setPrompts(prevPrompts => {
      return prevPrompts.map(prevPrompt => {
        let timer = prevPrompt.timer + deltaTime;
        let offset = linear(CONTAINER_WIDTH,  0, timer/PROMPT_TIME);
        let scale = easeInQuad(.5, 1, timer/PROMPT_TIME);

        return {
          ...prevPrompt,
          timer,
          offset,
          scale: Math.min(scale, 1),
          active: timer >= PROMPT_TIME
        }
      }).filter(prevPrompt => prevPrompt.timer < PROMPT_TIME + prevPrompt.chord.end);
    });
  });

  useEffect(() => {
    if(props.status === playAlongStatuses.RUNNING) {
      let timer = createTimer({
        events: props.song.song.chords.map(chord => ({
          onTrigger: () => {
            setPrompts(prevState => [ ...prevState, {
              offset: CONTAINER_WIDTH,
              timer: 0,
              scale: .5,
              trail: (chord.end - chord.start) * (CONTAINER_WIDTH/PROMPT_TIME) + 256,
              chord,
              active: false
            }]);
          },
          triggerAt: chord.start,
          endAfterEvents: true
        }))
      });

      timer.start();
    }
  }, [props.song, props.status, setPrompts]);

  return (
    <Container>
      <ChordTitleContainer>
        <ChordTitle />
      </ChordTitleContainer>
      {prompts.map((prompt, index) => (
        <ChordPrompt
          key={index}
          prompt={prompt}
          mode={props.mode}
          songKey={props.song.song.key}
        />
      ))}
    </Container>
  );
}

export default ChordScroller;

const CONTAINER_WIDTH = 2000;
export const PROMPT_TIME = 4000;

const Container = styled.div`
  position: relative;
  width: ${CONTAINER_WIDTH}px;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 256px;
`;

const ChordTitleContainer = styled.div`
  width: 256px;
  z-index: 100;
  position: absolute;
  left: 0px;
`;
