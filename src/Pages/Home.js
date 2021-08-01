import React from 'react';
import { Helmet } from 'react-helmet';

import HomeComponent from '../components/home/HomeComponent';

const Home = () => {
  return (
    <>
      {/* metatags */}
      <Helmet>
        <title>Home / keyluminate</title>
      </Helmet>

      {/* components */}
      <HomeComponent />
    </>
  )
}

export default Home;
