import React from 'react';

import BlackKey from './BlackKey';
import LeftKey from './LeftKey';
import MiddleKey from './MiddleKey';
import RightKey from './RightKey';

const Octave = (props) => {
  return (
    <>
      <LeftKey
        active={props.activeNotes.includes(props.octave*12)}
        prompt={props.promptNotes.includes(props.octave*12)}
      />
      <BlackKey
        active={props.activeNotes.includes(props.octave*12 + 1)}
        prompt={props.promptNotes.includes(props.octave*12 + 1)}
        offset={(props.octave - 2)*7 + 2 + 1}
      />
      <MiddleKey
        active={props.activeNotes.includes(props.octave*12 + 2)}
        prompt={props.promptNotes.includes(props.octave*12 + 2)}
      />
      <BlackKey
        active={props.activeNotes.includes(props.octave*12 + 3)}
        prompt={props.promptNotes.includes(props.octave*12 + 3)}
        offset={(props.octave - 2)*7 + 2 + 2}
      />
      <RightKey
        active={props.activeNotes.includes(props.octave*12 + 4)}
        prompt={props.promptNotes.includes(props.octave*12 + 4)}
      />
      <LeftKey
        active={props.activeNotes.includes(props.octave*12 + 5)}
        prompt={props.promptNotes.includes(props.octave*12 + 5)}
      />
      <BlackKey
        active={props.activeNotes.includes(props.octave*12 + 6)}
        prompt={props.promptNotes.includes(props.octave*12 + 6)}
        offset={(props.octave - 2)*7 + 2 + 4}
      />
      <MiddleKey
        active={props.activeNotes.includes(props.octave*12 + 7)}
        prompt={props.promptNotes.includes(props.octave*12 + 7)}
      />
      <BlackKey
        active={props.activeNotes.includes(props.octave*12 + 8)}
        prompt={props.promptNotes.includes(props.octave*12 + 8)}
        offset={(props.octave - 2)*7 + 2 + 5}
      />
      <MiddleKey
        active={props.activeNotes.includes(props.octave*12 + 9)}
        prompt={props.promptNotes.includes(props.octave*12 + 9)}
      />
      <BlackKey
        active={props.activeNotes.includes(props.octave*12 + 10)}
        prompt={props.promptNotes.includes(props.octave*12 + 10)}
        offset={(props.octave - 2)*7 + 2 + 6}
      />
      <RightKey
        active={props.activeNotes.includes(props.octave*12 + 11)}
        prompt={props.promptNotes.includes(props.octave*12 + 11)}
      />
    </>
  )
}

export default Octave;
