import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import createNote from '../../utilities/createNote';
import keyboardMap from '../../utilities/keyboardMap';

const InputManager = ({ dispatch }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if(keyboardMap[e.key.toLowerCase()]) {
        let midiNote = keyboardMap[e.key.toLowerCase()];
        dispatch({
          type: 'addNote',
          note: createNote(midiNote, 100)
        })
      }
    }

    const onKeyUp = (e) => {
      if(keyboardMap[e.key.toLowerCase()]) {
        dispatch({
          type: 'removeNote',
          note: createNote(keyboardMap[e.key.toLowerCase()])
        })
      }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
  }, [dispatch])

  return (
    <></>
  )
}

export default connect(state => ({
  notes: state.notes
}))(InputManager);
