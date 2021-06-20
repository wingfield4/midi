import React from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import getThemeOptions from '../../../utilities/getThemeOptions';

const ThemeProvider = ({ colors, dispatch, ...props }) => {
  const theme = createMuiTheme(getThemeOptions(colors));
  
  return (
    <MuiThemeProvider
      theme={theme}
      {...props}
    />
  )
}

export default connect(state => ({
  colors: state.colors
}))(ThemeProvider);
