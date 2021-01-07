import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _ from 'lodash';

import HeadlineArticle from '../components/HeadlineArticle';
import ArticleContent from '../components/ArticleContent';
import Container from '../components/Container';
import LongBanner from '../components/Adverts/LongBanner';

import items from '../data/sampleArticles';

//

const HomePage = ({ data }) => {
  const idx = data.sanityIndexPage;
  const articles = data.allSanityArticle;

  // * Grab all the headline data
  const { headline } = idx;

  // * Get all of the articles
  const { nodes } = articles;
  const chunked = _.chunk(items, 3);

  return (
    <>
      <HeadlineArticle
        title={headline.title}
        involved={headline.involved}
        category={headline.category}
        author={headline.author.name}
        slug={headline.slug.current}
        image={headline.image.asset.fluid}
      />

      <Container>
        <LongBanner type={1} />
      </Container>

      <ArticleContent data={chunked} />
    </>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;

//

export const query = graphql`
  query {
    allSanityArticle(sort: { fields: date, order: DESC }) {
      nodes {
        title
        date
        category
        shortDescription
        tags {
          value
        }
        slug {
          current
        }
      }
    }

    sanityIndexPage(_id: { eq: "indexPage" }) {
      headline {
        title
        involved
        category
        author {
          name
        }
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
