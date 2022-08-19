import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/sections/SEO';

export const Head = () => (
  <SEO title='Download Guide'/>
);

const download = () => {
  return (
    <PageLayout>
      <h1>Download</h1>
    </PageLayout>
  );
};

export default download;