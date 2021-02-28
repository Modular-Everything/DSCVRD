import React from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import moment from 'moment';

import HeadlineArticle from '../components/HeadlineArticle';
import SEO from '../components/SEO';
import ArticleContent from '../components/ArticleContent';

//

const Category = ({ data }) => {
  const { category } = data;
  const { articles } = data;

  // * Get all of the articles
  const { nodes } = articles;

  // * Remove articles that exist in the future
  const dateNow = moment().unix();
  const filterFutureArticles = _.filter(
    nodes,
    (o) => moment(o.date).unix() <= dateNow
  );

  // * Chunk the articles together in groups of 3
  const chunked = _.chunk(filterFutureArticles, 3);

  return (
    <>
      <SEO title={category.name} />

      <HeadlineArticle
        category={category.name}
        image={category.image.asset.fluid}
        shorten
      />

      <ArticleContent
        data={chunked}
        leadArticle={category.leadArticle}
        story={category.activeStory}
      />
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

    articles: allSanityArticle(
      sort: { fields: date, order: DESC }
      filter: { _id: { glob: "!drafts*" }, category: { eq: $slug } }
    ) {
      nodes {
        title
        date
        category
        _id
        shortDescription
        tags: articleType
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1440) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
