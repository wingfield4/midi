import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Cog } from 'mdi-material-ui';

import MenuItem from '@material-ui/core/MenuItem';

import Checkbox from '../mui/Checkbox';
import Dialog from '../mui/Dialog';
import IconButton from '../mui/IconButton';
import Select from '../mui/Select';

import instruments from '../../../utilities/instruments';

const SettingsButton = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        color={props.colors.headerText}
      >
        <Cog />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Site Settings"
        content={
          <>
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
            <br />
            <Select
              label="Instrument"
              value={props.instrument}
              onChange={(e) => {
                props.dispatch({
                  type: 'setInstrument',
                  instrument: e.target.value
                })
              }}
              id="instrument-select"
              style={{ marginLeft: 8 }}
            >
              <MenuItem value={instruments.GRAND_PIANO}>Grand Piano</MenuItem>
              <MenuItem value={instruments.CELTIC_HARP}>Celtic Harp</MenuItem>
            </Select>
          </>
        }
        onConfirm={() => setOpen(false)}
      />
    </>
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
  colors: state.colors,
  instrument: state.instrument
}))(SettingsButton);
