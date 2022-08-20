import React from "react"

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/sections/SEO';
import Hero from '../components/sections/Hero';
import PageLead from '../components/sections/PageLead';
import Features from '../components/sections/Features';
import Marketing from '../components/sections/Marketing';

export const Head = () => (
  <SEO title='App Overview'/>
);

const index = () => {
  return (
    <PageLayout>
      <Hero />
      <PageLead bgColor='witeAlpha.100'/>
      <Features bgColor='witeAlpha.100'/>
      <Marketing bgColor='witeAlpha.100'/>
    </PageLayout>
  );
};

export default index;


