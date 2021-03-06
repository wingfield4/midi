import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HelpCircleOutlineIcon from 'mdi-material-ui/HelpCircleOutline';

import ButtonBase from '@material-ui/core/ButtonBase';

import Link from '../common/Link';
import Text from '../common/mui/Text';

const GetStarted = (props) => {
  return (
    <OuterContainer colors={props.colors}>
      <Link to="/play">
        <Container colors={props.colors}>
          <HelpCircleOutlineIcon
            style={{
              margin: 16,
              fontSize: 128,
              color: props.colors.accent1
            }}
          />
          <TextContainer>
            <Text variant="h4" component="h2">
              Not sure where to start?
            </Text>
            <Text>
              Click here to go to our 'Just Play' mode. 
              There, you can use your computer keyboard or a connected MIDI 
              device to play our virtual piano! Or, you can check out some of our innovative
              learning exercises below.
            </Text>
          </TextContainer>
        </Container>
      </Link>
    </OuterContainer>
  )
}

export default connect(state => ({
  colors: state.colors
}))(GetStarted);

const Container = styled(({ colors, ...props }) => (
  <ButtonBase {...props} />
))`
  && {
    max-width: 800px;
    display: flex;
    align-items: center;
    margin: 16px;
    transition: background-color .3s;
    &:hover {
      background-color: ${props => props.colors.widgetBackground};
    }
  }
`;

const OuterContainer = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  display: flex;
  alig-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  background-color: ${props => props.colors.highlightBackground};
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 16px;
  text-align: left;
`;
