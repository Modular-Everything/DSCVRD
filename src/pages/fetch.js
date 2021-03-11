import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import _ from 'lodash';

import SEO from '../components/SEO';
import ArticleContent from '../components/ArticleContent';

//

const FetchPage = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const client = sanityClient({
      projectId: 'lylk5ufs',
      dataset: 'production',
      token:
        'skZElYGGGzxLvahE3LLIaFqn5OaZHm3ZT1SZneI5L6BLTTiPTwtp1hurXrRYAAGNRK24hiCMcXURD1JQ2CYrjbaCJU3diHNZNcmfz8rvhJdw9Hyug1cTLT0Xr22A7Y7t1791K0a8Yrqbs0nLTycipB5snbFMzFIsQ3rODuETN1OZHUIQQT3h', // or leave blank to be anonymous user
      useCdn: false,
    });

    const query = `
      *[_type == "article" && date <= now()] | order(date desc) {
        _id,
        title,
        date,
        category,
        shortDescription,
        articleType,
        'slug': {
          'current': slug.current,
        },
        'image': image.asset->url,
      }
    `;

    client
      .fetch(query)
      .then((response) => response)
      .then((resData) => {
        setArticles(resData);
      });
  }, []);

  if (articles) console.log('articles:', articles);

  return (
    <>
      <SEO title="International Music &amp; Entertainment Magazine" />
      <section style={{ marginTop: '15vh' }}>
        {!articles && 'Loading...'}
        {articles && <ArticleContent data={_.chunk(articles, 3)} />}
      </section>
    </>
  );
};

export default FetchPage;
