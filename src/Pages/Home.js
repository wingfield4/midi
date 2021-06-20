import React from 'react';

import Link from '../components/common/Link';
import Text from '../components/common/mui/Text';

const Home = () => {
  return (
    <div>
      <Link to="/demo">
        <Text>Check out the demo</Text>
      </Link>
    </div>
  )
}

export default Home;
