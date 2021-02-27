import dotenv from 'dotenv';

//

dotenv.config({ path: '.env' });

const isProd = process.env.NODE_ENV === 'production';
const token = process.env.SANITY_TOKEN;

//

export default {
  siteMetadata: {
    title: 'DSCVRD Magazine',
    siteUrl: 'https://www.discoveredmagazine.com/',
    titleTemplate: '%s · DSCVRD Magazine',
    description:
      'International Music & Entertainment magazine bringing you the best from UK, Europe & America',
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-styled-components',
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
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "GA-TRACKING_ID", // Google Analytics / GA
    //       "AW-CONVERSION_ID", // Google Ads / Adwords / AW
    //       "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     },
    //   },
    // },
  ],
};
