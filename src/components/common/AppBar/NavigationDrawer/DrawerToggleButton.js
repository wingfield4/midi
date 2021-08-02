import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import MenuIcon from 'mdi-material-ui/Menu';

import IconButton from '../../mui/IconButton';

const DrawerToggleButton = ({ colors, dispatch, ...props }) => {
  return (
    <HeaderIconButton colors={colors} {...props}>
      <MenuIcon style={{ color: colors.headerText }} />
    </HeaderIconButton>
  )
}

export default connect(state => ({
  colors: state.colors
}))(DrawerToggleButton);

const HeaderIconButton = styled(({ colors, ...props }) => (
  <IconButton
    {...props}
  />
))`
  margin-right: 24px;
  color: ${props => props.colors.headerText};
`;
