import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Text from './Text';

const Loading = (props) => {
  return (
    <Container>
      {props.message && <Text>{props.message}</Text>}
      <div className="lds-ellipsis">
        <div style={{ background: props.colors.text }}></div>
        <div style={{ background: props.colors.text }}></div>
        <div style={{ background: props.colors.text }}></div>
        <div style={{ background: props.colors.text }}></div>
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
