import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/sections/SEO';

export const Head = () => (
  <SEO title={`Oopsies... Let's go back`}/>
);

const Error = () => {
  return (
    <PageLayout>
      <h1>404</h1>
    </PageLayout>
  );
};

export default Error;