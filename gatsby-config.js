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
    description:
      'International Music & Entertainment magazine bringing you the best from UK, Europe & America',
  },
  plugins: [
    'gatsby-plugin-styled-components',
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
  ],
};
