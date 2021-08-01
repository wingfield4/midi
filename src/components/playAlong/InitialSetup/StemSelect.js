import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';

import Select from '../../common/mui/Select';

import stems from '../../../utilities/songs/stems';

const StemSelect = ({ song, ...props }) => {
  return (
    <Select
      label="Stem"
      {...props}
    >
      {song && song.song[stems.FULL] && <MenuItem value={stems.FULL}>{stems.FULL}</MenuItem>}
      {song && song.song[stems.NO_CHORDS] && <MenuItem value={stems.NO_CHORDS}>{stems.NO_CHORDS}</MenuItem>}
    </Select>
  )
}

export default StemSelect;
