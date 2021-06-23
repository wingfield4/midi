import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import instrumentLibrary from '../../../utilities/instrumentLibrary';

const MidiSoundManager = (props) => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [sustainedNotes, setSustainedNotes] = useState([]);

  useEffect(() => {
    const onNoteStart = (note) => {
      setActiveNotes(prevState => [ ...prevState, note]);
      setSustainedNotes(prevState => [ ...prevState, note]);
      instrumentLibrary.isInitialized && instrumentLibrary.playSound(note);
    }
  
    const onNoteEnd = (note) => {
      setActiveNotes(prevState => prevState.filter(prevSound => prevSound.midiNote !== note.midiNote));

      if(!props.sustain) {
        setSustainedNotes(prevState => prevState.filter(prevSound => prevSound.midiNote !== note.midiNote));
        instrumentLibrary.isInitialized && instrumentLibrary.stopSound(note);
      }
    }

    props.notes.forEach(note => {
      let exists = false;
      activeNotes.forEach(activeNote => {
        if(activeNote.midiNote === note.midiNote)
          exists = true;
      })
      if(!exists)
        onNoteStart(note);
    })

    sustainedNotes.forEach(sustainedNote => {
      let exists = false;
      props.notes.forEach(note => {
        if(sustainedNote.midiNote === note.midiNote)
          exists = true;
      })
      if(!exists)
        onNoteEnd(sustainedNote);
    })
  }, [props.notes, props.sustain]);

  return (
    <></>
  )
}

export default connect(state => ({
  notes: state.notes,
  sustain: state.sustain
}))(MidiSoundManager);
