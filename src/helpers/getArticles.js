const sanityClient = require('@sanity/client');

export default function getArticles() {
  const client = sanityClient({
    projectId: 'lylk5ufs',
    dataset: 'production',
    token:
      'skZElYGGGzxLvahE3LLIaFqn5OaZHm3ZT1SZneI5L6BLTTiPTwtp1hurXrRYAAGNRK24hiCMcXURD1JQ2CYrjbaCJU3diHNZNcmfz8rvhJdw9Hyug1cTLT0Xr22A7Y7t1791K0a8Yrqbs0nLTycipB5snbFMzFIsQ3rODuETN1OZHUIQQT3h', // or leave blank to be anonymous user
    useCdn: false,
  });

  const query =
    '*[_type == "article" && date <= now()]{title, date}[0..5] | order(date desc)';
  // const params = null;

  return client
    .fetch(query)
    .then((articles) => console.log(articles))
    .catch((err) => console.error(err));
}
