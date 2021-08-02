import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import createNote from '../../../utilities/createNote';

const MidiManager = ({ dispatch }) => {
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    const onMIDISuccess = (midiAccess) => {
      console.log('here');
      setInputs(midiAccess.inputs);
    }
  
    const onMIDIFailure = () => {
      //TODO handle error
    }

    if(navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(onMIDISuccess).catch(onMIDIFailure);
    } else {
      //TODO handle bad browser
      console.log('WebMIDI is not supported in this browser.');
    }
  }, [setInputs]);

  useEffect(() => {
    const getMIDIMessage = (message) => {
      const [command, note, velocity = 0] = message.data;
  
      switch (command) {
        case 176: //toggle sustain
          console.log('toggle sustain');
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
          //TODO handle invalid command
      }
    }

    const addNote = (midiNote, velocity) => {
      dispatch({
        type: 'addNote',
        note: createNote(midiNote, velocity)
      });
    }
  
    const removeNote = (midiNote) => {
      dispatch({
        type: 'removeNote',
        note: createNote(midiNote)
      });
    }

    inputs.forEach(input => {
      input.onmidimessage = getMIDIMessage;
    })

    return () => {
      inputs.forEach(input => {
        input.onmidimessage = null;
      })
    }
  }, [dispatch, inputs]);

  return (
    <></>
  )
}

export default connect(state => ({
  notes: state.notes
}))(MidiManager);
