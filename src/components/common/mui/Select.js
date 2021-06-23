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
  ...props 
}) => {
  
  return (
    <FormControl
      style={{
        minWidth: 128
      }}
      {...FormControlProps}
      disabled={disabled}
    >
      <InputLabel
        disabled={disabled}
      >
        {label}
      </InputLabel>
      <MuiSelect
        input={<Input />}
        disabled={disabled}
        {...props}
      >
        {children}
      </MuiSelect>
    </FormControl>
  )
}

export default Select;
