import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ChordManager from '../managers/MidiManagers/ChordManager';
import InputManager from '../managers/MidiManagers/InputManager';
import MidiManager from '../managers/MidiManagers/MidiManager';
import MidiSoundManager from '../managers/MidiManagers/MidiSoundManager';

import ExerciseStatus from './ExerciseStatus';
import Keyboard from '../common/Keyboard';

import queueSequence from '../../utilities/queueSequence';

const Exercise = (props) => {
  const [mode, setMode] = useState(null);
  const [noteQueue, setNoteQueue] = useState(null);
  const [promptNotes, setPromptNotes] = useState(null);

  useEffect(() => {
    if(mode !== modes.LISTEN) {
      setMode(modes.LISTEN);
      setNoteQueue(props.exercise.sequence.scheduledNotes.map(scheduledNote => scheduledNote.note.midiNote));
      queueSequence(props.exercise.sequence.scheduledNotes, {
        ...props.exercise.sequence.defaultConfig,
        onEnd: () => {
          setMode(modes.PLAY);
          setPromptNotes([ props.exercise.sequence.scheduledNotes[0].note.midiNote ]);
        },
        delay: 1 //second
      })
    }
  }, [props.exercise])

  useEffect(() => {
    if(mode === modes.PLAY && props.lastNote) {
      setPromptNotes(null);
      if(noteQueue[0] === props.lastNote.midiNote) {
        if(noteQueue.length === 1) {
          setMode(modes.SUCCESS);
          setTimeout(props.onSuccess, 1500);
        } else {
          setNoteQueue(noteQueue.slice(1));
        }
      } else {
        setMode(modes.FAILURE);
        setNoteQueue(props.exercise.sequence.scheduledNotes.map(scheduledNote => scheduledNote.note.midiNote));
        setTimeout(() => {
          setMode(modes.PLAY);
        }, 1500)
      }
    }
  }, [props.lastNote, props.exercise, props.onSuccess])

  const replaySound = () => {
    setMode(modes.LISTEN);
    setPromptNotes(null);
    queueSequence(props.exercise.sequence.scheduledNotes, {
      ...props.exercise.sequence.defaultConfig,
      onEnd: () => {
        setMode(modes.PLAY);
        setPromptNotes([ props.exercise.sequence.scheduledNotes[0].note.midiNote ]);
      },
      delay: 1 //second
    })
  }

  const rootNote = props.exercise.sequence.scheduledNotes[0].note;
  return (
    <>
      {/* Managers */}
      {mode !== modes.LISTEN &&
        <>
          <MidiSoundManager />
          <ChordManager />
          <InputManager />
          <MidiManager />
        </>
      }

      <ExerciseStatus
        mode={mode}
        onReplay={replaySound}
        rootNote={rootNote}
      />
      <Keyboard
        promptNotes={promptNotes}
      />
    </>
  )
}

export default connect(state => ({
  notes: state.notes,
  lastNote: state.lastNote
}))(Exercise);

const modes = {
  LISTEN: 'listen',
  PLAY: 'play',
  FAILURE: 'failure',
  SUCCESS: 'success'
}
