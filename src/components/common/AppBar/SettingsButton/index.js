import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Cog } from 'mdi-material-ui';

import IconButton from '../../mui/IconButton';
import SettingsDrawer from './SettingsDrawer';

const SettingsButton = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
      >
        <Cog style={{ color: props.colors.headerText }} />
      </IconButton>
      <SettingsDrawer
        open={open}
        onClose={handleClose}
      />
    </>
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
  colors: state.colors
}))(SettingsButton);
