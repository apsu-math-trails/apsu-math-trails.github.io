import React from 'react';

import Navbar from '../bars/Navbar';
import Footer from '../sections/Footer'

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      { children }
      <Footer />
    </>
  );
};

export default PageLayout;