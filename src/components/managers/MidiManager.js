import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import createNote from '../../utilities/createNote';

const MidiManager = ({ dispatch }) => {
  useEffect(() => {
    const addNote = (midiNote, velocity) => {
      let note = createNote(midiNote, velocity);
      dispatch({
        type: 'addNote',
        note
      });
    }
  
    const removeNote = (midiNote) => {
      let note = createNote(midiNote);
      dispatch({
        type: 'removeNote',
        note
      });
    }

    const onMIDISuccess = (midiAccess) => {
      midiAccess.inputs.forEach(input => {
        input.onmidimessage = getMIDIMessage;
      })
    }
  
    const onMIDIFailure = () => {
      //TODO handle error
    }
  
    const getMIDIMessage = (message) => {
      const command = message.data[0];
      const note = message.data[1];
      const velocity = (message.data.length > 2) ? message.data[2] : 0;
  
      switch (command) {
        case 176: //toggle sustain
          dispatch({ type: 'toggleSustain' });
          break;
        case 144: //noteOn
          if(velocity > 0)
            addNote(note, velocity);
          else
            removeNote(note);
          break;
        case 128: //noteOff
          removeNote(note);
          break;
        default:
      }
    }

    if(navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    } else {
      //TODO handle bad browser
      console.log('WebMIDI is not supported in this browser.');
    }
  }, [dispatch]);

  return (
    <></>
  )
}

export default connect(state => ({
  notes: state.notes
}))(MidiManager);
