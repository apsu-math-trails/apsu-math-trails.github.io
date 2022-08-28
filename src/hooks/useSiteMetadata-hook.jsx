import { graphql, useStaticQuery } from 'gatsby'; 

const useSiteMetadata = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          subTitle
          description
          organization {
            official {
              socialLinks {
                site
                twitter
                facebook
                instagram
              }
            }
            costem {
              socialLinks {
                site
                twitter
                facebook
                instagram
                github
              }
            }
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;