import dotenv from 'dotenv';

//

dotenv.config({ path: '.env' });

const isProd = process.env.NODE_ENV === 'production';
const token = process.env.SANITY_TOKEN;

//

export default {
  siteMetadata: {
    title: 'DSCVRD Magazine',
    siteUrl: 'https://dscvrd.co/',
    titleTemplate: '%s · DSCVRD Magazine',
    description:
      'International Music & Entertainment magazine bringing you the best from UK, Europe & America',
  },

  plugins: [
    'gatsby-plugin-styled-components',
    // `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DSCVRD Magazine`,
        short_name: `DSCVRD`,
        start_url: `/`,
        background_color: `#0e0e0e`,
        theme_color: `#ffef00`,
        display: `standalone`,
        icon: `./src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`, // important - keep this below the manifest
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://dscvrd.us7.list-manage.com/subscribe/post?u=c1a50ea00232012b07a8c48f5&amp;id=c3ddd5c68f',
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ffef00`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-5CL197TN3Q', // dscvrd.co
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          exclude: ['/preview/**'],
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
