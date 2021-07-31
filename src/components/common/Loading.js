import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Text from './mui/Text';

const Loading = (props) => {
  return (
    <Container>
      {props.message && <Text color="#FFF">{props.message}</Text>}
      <div className="lds-ellipsis">
        <div style={{ background: '#FFF' }}></div>
        <div style={{ background: '#FFF' }}></div>
        <div style={{ background: '#FFF' }}></div>
        <div style={{ background: '#FFF' }}></div>
      </div>
    </Container>
  )
}

export default connect(state => ({
  colors: state.colors
}))(Loading);

const Container = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  display: flex;
  justify-content: center;
`;
