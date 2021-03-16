import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import sanityClient from '@sanity/client';

import clientConfig from '../../client-config';
import HeadlineArticle from '../components/HeadlineArticle';
import SEO from '../components/SEO';
import ArticleContent from '../components/ArticleContent';

//

const Category = ({ data }) => {
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
      *[_type == "article" && category == 'noise' && date <= now()] | order(date desc) {
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

      {!articles && 'Loading...'}
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

//

export const query = graphql`
  query($slug: String!) {
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      name
      image {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      leadArticle {
        title
        image {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        shortDescription
        subtitle
        category
      }
      activeStory {
        name
        openingText
        outroText
        disableOpening
        openingImage {
          asset {
            fluid(maxWidth: 1280) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        slides {
          title
          subtitle
          copy
          _key
          image {
            asset {
              fluid(maxWidth: 1280) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
