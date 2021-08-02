import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HelpCircleOutlineIcon from 'mdi-material-ui/HelpCircleOutline';
import InformationOutlineIcon from 'mdi-material-ui/InformationOutline';

import Hidden from '@material-ui/core/Hidden';

import Button from '../mui/Button';
import NavigationDrawer from './NavigationDrawer';
import Link from '../Link';
import SettingsButton from './SettingsButton';

import icon from '../../../assets/icon_label_large_square.png';

const AppBar = (props) => {
  return (
    <Container colors={props.colors}>
      <NavigationDrawer />
      <Link to="/">
        <img
          height="36"
          src={icon}
          style={{ marginRight: 8, marginLeft: 8 }}
          alt="Project MIDI Logo"
        />
      </Link>
      <div style={{ flex: 1 }} />
      <Hidden smDown>
        <Link to="/howTo">
          <HeaderButton colors={props.colors}>
            <HelpCircleOutlineIcon style={{ marginRight: 4 }} />
            How To Use
          </HeaderButton>
        </Link>
        <Link to="/about">
          <HeaderButton colors={props.colors}>
            <InformationOutlineIcon style={{ marginRight: 4 }} />
            About Us
          </HeaderButton>
        </Link>
      </Hidden>
      <SettingsButton />
    </Container>
  )
}

export default connect(state => ({
  colors: state.colors
}))(AppBar);

const Container = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 48px;
  background-color: ${props => props.colors.header};
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0px 0px 16px 0px ${props => props.colors.header};
`;

const HeaderButton = styled(({ colors, ...props }) => (
  <Button 
    variant="outlined"
    {...props}
  />
))`
  && {
    border-color: ${props => props.colors.headerText};
    border-radius: 0px;
    color: ${props => props.colors.headerText};
    margin-right: 16px;
  }
`;
