import React from "react"

import PageLayout from '../components/layouts/PageLayout';
import Hero from '../components/sections/Hero';
import PageLead from '../components/sections/PageLead';
import Features from '../components/sections/Features';
import Marketing from '../components/sections/Marketing';

const index = () => {
  return (
    <PageLayout>
      <Hero />
      <PageLead />
      <Features />
      <Marketing />
    </PageLayout>
  );
};

export default index;

