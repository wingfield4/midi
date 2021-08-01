import React from 'react';
import { Helmet } from 'react-helmet';

import HowToComponent from '../components/howTo/HowToComponent';

const HowTo = () => {
  return (
    <>
      {/* metatags */}
      <Helmet>
        <title>How To / keyluminate</title>
      </Helmet>

      {/* components */}
      <HowToComponent />
    </>
  )
}

export default HowTo;
