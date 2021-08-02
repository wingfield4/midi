import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';

import Select from '../../../mui/Select';

import instruments from '../../../../../utilities/instruments';

const InstrumentSelect = ({ dispatch, instrument, ...props }) => {
  return (
    <Select
      label="Instrument"
      value={instrument}
      onChange={(e) => {
        dispatch({
          type: 'setInstrument',
          instrument: e.target.value
        })
      }}
      id="instrument-select"
      style={{ marginLeft: 8 }}
      {...props}
    >
      <MenuItem value={instruments.GRAND_PIANO}>Grand Piano</MenuItem>
      <MenuItem value={instruments.CELTIC_HARP}>Celtic Harp</MenuItem>
    </Select>
  )
}

export default connect(state => ({
  instrument: state.instrument
}))(InstrumentSelect);
