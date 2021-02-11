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
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://dscvrd.us7.list-manage.com/subscribe/post?u=c1a50ea00232012b07a8c48f5&amp;id=c3ddd5c68f', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
};
