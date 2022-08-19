import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/sections/SEO';

export const Head = () => (
  <SEO title='Project Sponsors'/>
);

const sponsors = () => {
  return (
    <PageLayout>
      <h1>Sponsors</h1>
    </PageLayout>
  );
};

export default sponsors;