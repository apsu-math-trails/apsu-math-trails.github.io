import React from 'react';
import useSiteMetadata from '../../hooks/useSiteMetadata-hook';

const SEO = ({ title, desc, pathname, children }) => {
  const { subTitle, description } = useSiteMetadata()

  const seo = {
    title: `${title} ${subTitle}` || `Journey Together ${subTitle}`,
    description: description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      {children}
    </>
  );
};

export default SEO;