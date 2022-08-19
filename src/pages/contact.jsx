import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/sections/SEO';

export const Head = () => (
  <SEO title='Contact Us'/>
);

const contact = () => {
  return (
    <PageLayout>
      <h1>Contact</h1>
    </PageLayout>
  );
};

export default contact;