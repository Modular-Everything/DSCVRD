import dotenv from 'dotenv';

//

dotenv.config({ path: '.env' });

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
        projectId: 'lylk5ufs',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
