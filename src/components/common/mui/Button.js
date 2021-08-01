import React from 'react';

import MuiButton from '@material-ui/core/Button';

const Button = ({ children, small, ...props }) => {
  let inlineStyle = {
    borderRadius: 0
  };

  if(small) {
    inlineStyle.paddingTop = 4;
    inlineStyle.paddingBottom = 4;
    inlineStyle.fontSize = 12;
  }
  
  return (
    <MuiButton
      style={inlineStyle}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button;
