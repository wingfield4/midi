import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';

import Divider from '../../Divider';
import DrawerList from './DrawerList';
import UserAvatar from './UserAvatar';

const DrawerComponent = ({ colors, dispatch, ...props }) => {
  return (
    <Drawer
      anchor="left"
      {...props}
    >
      <ListContainer colors={colors}>
        <UserAvatar />
        <Divider />
        <DrawerList onClose={props.onClose} />
      </ListContainer>
    </Drawer>
  )
}

export default connect(state => ({
  colors: state.colors
}))(DrawerComponent);

const ListContainer = styled(({ colors, ...props }) => (
  <div 
    role="presentation"
    {...props}
  />
))`
  width: 256px;
  background-color: ${props => props.colors.widgetBackground};
  height: 100%;
`;
