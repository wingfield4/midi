import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MuiSelect from '@material-ui/core/Select';

import Input from './Input';

const Select = ({
  children,
  disabled,
  label,
  style,
  FormControlProps,
  fullWidth,
  ...props 
}) => {
  
  return (
    <FormControl
      style={{
        minWidth: 128
      }}
      {...FormControlProps}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      <InputLabel
        disabled={disabled}
      >
        {label}
      </InputLabel>
      <MuiSelect
        input={<Input />}
        disabled={disabled}
        fullWidth={fullWidth}
        {...props}
      >
        {children}
      </MuiSelect>
    </FormControl>
  )
}

export default Select;
