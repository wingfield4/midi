import React from 'react';
import { connect } from 'react-redux';

import Checkbox from '../../../mui/Checkbox';

const ColorModeSelect = (props) => {
  return (
    <Checkbox
      id="checkbox-radio-option-one"
      checked={props.colorMode === 'dark'}
      onChange={e => {
        let mode = e.target.checked ? 'dark' : 'light';
        localStorage.setItem('colorMode', mode);
        props.dispatch({
          type: 'setColorMode',
          mode
        })
      }}
      label="Use Dark Mode"
    />
  )
}

export default connect(state => ({
  colors: state.colors,
  colorMode: state.colorMode
}))(ColorModeSelect);
