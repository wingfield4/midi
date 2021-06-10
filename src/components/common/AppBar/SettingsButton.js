import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Cog } from 'mdi-material-ui';

import Dialog from '../Dialog';
import IconButton from '../IconButton';
import Text from '../Text';

const SettingsButton = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        color={props.colors.headerText}
      >
        <Cog />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Site Settings"
        content={
          <>
            <Text component="label" htmlFor="checkbox-radio-option-one">
              <input
                type="checkbox"
                id="checkbox-radio-option-one"
                checked={props.colorMode === 'dark'}
                onChange={e => {
                  let mode = e.target.checked ? 'dark' : 'light';
                  localStorage.setItem('colorMode', mode);
                  props.dispatch({
                    type: 'setColorMode',
                    mode
                  })
                }}
              />
              Use Dark Mode
            </Text>
          </>
        }
        onConfirm={() => setOpen(false)}
      />
    </>
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
  colors: state.colors
}))(SettingsButton);
