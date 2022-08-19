import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/sections/SEO';

export const Head = () => (
  <SEO title='Our Team'/>
);

const team = () => {
  return (
    <PageLayout>
      <h1>team</h1>
    </PageLayout>
  );
};

export default team;