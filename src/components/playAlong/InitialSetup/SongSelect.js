import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';

import Select from '../../common/mui/Select';

import library from '../../../utilities/songs/library';

const SongSelect = (props) => {
  return (
    <Select
      label="Song"
      {...props}
    >
      {Object.entries(library).map(([key, item]) => (
        <MenuItem key={key} value={key}>{item.title}</MenuItem>
      ))}
    </Select>
  )
}

export default SongSelect
