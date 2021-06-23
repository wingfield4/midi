import React from 'react';
import styled from 'styled-components';

import Button from '../../common/mui/Button';
import Link from '../../common/Link';

const HomeLink = ({ label, ...props }) => {
  return (
    <Container>
      <Link {...props}>
        <Button variant="contained" color="primary">
          {label}
        </Button>
      </Link>
    </Container>
  )
}

export default HomeLink;

const Container = styled.div`
  margin: 8px;
`;
