import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';

import Select from '../../common/mui/Select';

const DifficultySelect = (props) => {
  return (
    <Select
      label="Difficulty Level"
      {...props}
    >
      <MenuItem value="beginner">Beginner</MenuItem>
      <MenuItem value="intermediate">Intermediate</MenuItem>
      <MenuItem value="advanced">Advanced</MenuItem>
    </Select>
  )
}

export default DifficultySelect
