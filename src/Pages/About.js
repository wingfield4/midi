import React from 'react';
import { Helmet } from 'react-helmet';

import AboutComponent from '../components/about/AboutComponent';

const About = () => {
  return (
    <>
      {/* metatags */}
      <Helmet>
        <title>About / keyluminate</title>
      </Helmet>

      {/* components */}
      <AboutComponent />
    </>
  )
}

export default About;
