import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Link from '../Link';
import SettingsButton from './SettingsButton';
import Text from '../mui/Text';

import icon from '../../../assets/icon_label_large_square.png';

const AppBar = (props) => {
  return (
    <Container colors={props.colors}>
      <Link to="/">
        <img
          height="36"
          src={icon}
          style={{ marginRight: 8 }}
          alt="Project MIDI Logo"
        />
      </Link>
      {/* <Text color={props.colors.headerText}>Keyluminate</Text> */}
      <div style={{ flex: 1 }} />
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
