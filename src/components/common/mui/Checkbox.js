import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiCheckbox from '@material-ui/core/Checkbox';

const Checkbox = ({ FormControlLabelProps, label, ...props }) => {
  return (
    <FormControlLabel
      control={<MuiCheckbox {...props} />}
      label={label}
      {...FormControlLabelProps}
    />
  )
}

export default Checkbox;
