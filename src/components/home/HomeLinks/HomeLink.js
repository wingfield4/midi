import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ButtonBase from '@material-ui/core/ButtonBase';

import Link from '../../common/Link';
import Text from '../../common/mui/Text';

const HomeLink = ({ colors, description, dispatch, label, ...props }) => {
  return (
    <Link {...props}>
      <Container colors={colors}>
        <TextContainer>
          <Text
            variant="h5" 
            component="h3"
            style={{
              textDecoration: 'underline'
            }}
          >
            {label}
          </Text>
          <Text style={{ fontSize: 14 }}>
            {description}
          </Text>
        </TextContainer>
      </Container>
    </Link>
  )
}

export default connect(state => ({
  colors: state.colors
}))(HomeLink);

const Container = styled(ButtonBase)`
  && {
    padding: 24px;
    max-width: 584px;
    transition: background-color .3s;
    &:hover  {
      background-color: ${props => props.colors.highlightBackground};
    }
  }
`;

const TextContainer = styled.div`
  text-align: left;
`;
