import React, { useEffect, useState } from 'react';

import ChordScroller, { PROMPT_TIME } from './ChordScroller';
import Keyboard from '../learn/Keyboard';
import SongController from './SongController';

import createTimer from '../../utilities/createTimer';
import song from '../../utilities/songs/song';
import statuses from '../../utilities/playAlongStatuses';
import stems from '../../utilities/songs/stems';

const Exercise = (props) => {
  const [status, setStatus] = useState(statuses.STARTING);

  useEffect(() => {
    song.initialize(props.song.song, {
      stem: props.stem
    }).then(() => {
      let timer = createTimer({
        events: [{
          onTrigger: () => {
            song.play();
          },
          triggerAt: PROMPT_TIME
        }],
        endAfterEvents: true
      });
      timer.start();
      setStatus(statuses.RUNNING);
    })

    return () => {
      song.pause();
    }
  }, [])

  return (
    <>
      <SongController
        song={props.song}
        status={status}
      />

      <ChordScroller
        song={props.song}
        status={status}
        mode={props.mode}
      />
      <Keyboard />
    </>
  )
}

export default Exercise;
