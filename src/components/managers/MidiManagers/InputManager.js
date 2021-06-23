import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import createNote from '../../../utilities/createNote';
import keyboardMap from '../../../utilities/keyboardMap';

const InputManager = ({ dispatch }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      const [command, midiNote, velocity = 75] = keyboardMap[e.key.toLowerCase()] || [];
      switch(command) {
        case 176:
          dispatch({ type: 'toggleSustain' });
          break;
        case 144:
          dispatch({
            type: 'addNote',
            note: createNote(midiNote, velocity)
          });
          break;
        default:
          //invalid key -- ignore
      }
    }

    const onKeyUp = (e) => {
      const [command, midiNote] = keyboardMap[e.key.toLowerCase()] || [];
      switch(command) {
        case 176:
          dispatch({ type: 'toggleSustain' })
          break;
        case 144:
          dispatch({
            type: 'removeNote',
            note: createNote(midiNote)
          })
          break;
        default:
          //invalid key --ignore
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
