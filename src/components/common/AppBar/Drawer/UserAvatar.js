import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AccountCircleIcon from 'mdi-material-ui/AccountCircle';

import Text from '../../mui/Text';

const UserAvatar = (props) => {
  return (
    <Container>
      <AccountCircleIcon
        style={{
          height: 128,
          width: 128,
          color: props.colors.accent3
        }}
      />
      <Text style={{ fontSize: 18 }}>My Profile</Text>
      <Text variant="caption">(Coming Soon)</Text>
    </Container>
  )
}

export default connect(state => ({
  colors: state.colors
}))(UserAvatar);

const Container = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
