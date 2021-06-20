import React from 'react';
import { connect } from 'react-redux';

import MuiTypography from '@material-ui/core/Typography';

const Text = ({
  color,
  children,
  colors,
  dispatch,
  fontSize,
  style,
  ...props 
}) => {

  const getFontSize = () => {
    if(fontSize) {
      return fontSize;
    } else if(style && style.fontSize) {
      return style.fontSize;
    } else if(props.variant && fontSizes[props.variant]) {
      return `${fontSizes[props.variant]}em`
    }
    
    return 16;
  }

  return (
    <MuiTypography
      style={{
        color: color || colors.text,
        ...style,
        fontSize: getFontSize()
      }}
      {...props}
    >
      {children}
    </MuiTypography>
  )
}

export default connect(state => ({
  colors: state.colors
}))(Text);

const fontSizes = {
  "h1": 6,
  "h2": 3.75,
  "h3": 3,
  "h4": 2.125,
  "h5": 1.5,
  "h6": 1.25,
  "subtitle1": 1,
  "subtitle2": .875,
  "body1": 1,
  "body2": .875,
  "caption": .75,
  "button": .875,
  "overline": .75
}
