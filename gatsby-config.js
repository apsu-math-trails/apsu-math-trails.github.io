/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Apsu Math Trails - Official Site',
    description: `Offical website for APSU College of STEM's Math Trails mobile app`,
    image: `/gatsby-icon.png`,
    organization: {
      official: {
        socialLinks: {
          site: 'https://www.apsu.edu/',
          twitter: 'https://twitter.com/austinpeay?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
          facebook: 'https://www.facebook.com/austinpeay/',
          instagram: 'https://www.instagram.com/austinpeay/?hl=en',
        }
      },
      costem: {
        socialLinks: {
          site: 'https://www.apsu.edu/costem',
          twitter: 'https://twitter.com/apsucostem',
          facebook: 'https://www.facebook.com/APSUCoSTEM/',
          instagram: 'https://www.instagram.com/apsucostem/?hl=en',
          github: 'https://github.com/apsu-math-trails',
        }
      }
    },
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'illustrations',
        path: `${__dirname}/src/assets/illustrations`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: 'logos',
    //     path: `${__dirname}/src/assets/logos`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
}
