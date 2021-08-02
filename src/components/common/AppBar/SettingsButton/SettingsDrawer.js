import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';

import Settings from './Settings';

const SettingsDrawer = ({ colors, dispatch, ...props }) => {
  return (
    <Drawer
      anchor="right"
      {...props}
    >
      <ListContainer colors={colors}>
        <Settings />
      </ListContainer>
    </Drawer>
  )
}

export default connect(state => ({
  colors: state.colors
}))(SettingsDrawer);

const ListContainer = styled(({ colors, ...props }) => (
  <div 
    role="presentation"
    {...props}
  />
))`
  width: 296px;
  padding: 8px;
  background-color: ${props => props.colors.widgetBackground};
  height: 100%;
`;
