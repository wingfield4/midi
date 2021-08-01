import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';

import Select from '../../common/mui/Select';

import chordFormats from '../../../utilities/chordFormats';

const ModeSelect = ({ song, ...props }) => {
  return (
    <Select
      label="Mode"
      {...props}
    >
      {Object.entries(chordFormats).map(([key, item]) => (
        <MenuItem key={key} value={item}>{item}</MenuItem>
      ))}
    </Select>
  )
}

export default ModeSelect;
