import React, { useState } from 'react';

import DrawerComponent from './DrawerComponent';
import DrawerToggleButton from './DrawerToggleButton';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <DrawerToggleButton onClick={handleOpen} />
      <DrawerComponent open={open} onClose={handleClose} />
    </>
  )
}

export default Drawer;
