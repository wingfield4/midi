import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import chordify from '../../../utilities/chordify';

const ChordManager = ({ notes, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'setChord',
      chord: chordify(notes)
    })
  }, [dispatch, notes])

  return (
    <></>
  )
}

export default connect(state => ({
  notes: state.notes
}))(ChordManager);
