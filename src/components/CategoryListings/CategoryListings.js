import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import _ from 'lodash';
import sanityClient from '@sanity/client';

import clientConfig from '../../../client-config';
import HeadlineArticle from '../HeadlineArticle';
import SEO from '../SEO';
import ArticleContent from '../ArticleContent';
import Container from '../Container';
import Loading from '../Loading';

//

const Category = ({ uri, data }) => {
  const slug = uri.replace('/', '').toString();

  const { category } = data;
  const [articles, setArticles] = useState(null);

  // * Get all of the articles
  useEffect(() => {
    const client = sanityClient({
      projectId: clientConfig.sanity.projectId,
      dataset: clientConfig.sanity.dataset,
      token: process.env.SANITY_TOKEN,
      useCdn: false,
    });

    const groq = `
      *[_type == "article" && category == '${slug}' && date <= now()] | order(date desc) {
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
      .fetch(groq)
      .then((response) => response)
      .then((resData) => {
        setArticles(resData);
      });
  }, []);

  return (
    <>
      <SEO title={category.name} />

      <HeadlineArticle
        category={category.name}
        image={category.image.asset.fluid}
        shorten
      />

      {!articles && (
        <Container>
          <Loading />
        </Container>
      )}
      {articles && (
        <ArticleContent
          data={_.chunk(articles, 3)}
          leadArticle={category.leadArticle}
          story={category.activeStory}
          noCategory
        />
      )}
    </>
  );
};

export default Category;
