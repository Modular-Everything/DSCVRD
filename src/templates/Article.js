import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import HeadlineArticle from '../components/HeadlineArticle';

//

const SingleArticlePage = ({ data }) => (
  <HeadlineArticle
    title={data.article.title}
    involved={data.article.involved}
    category={data.article.category}
    author={data.article.author.name}
    image={data.article.image.asset.fluid}
  />
);

export default SingleArticlePage;

SingleArticlePage.propTypes = {
  data: PropTypes.object.isRequired,
};

//

export const query = graphql`
  query($slug: String!) {
    article: sanityArticle(slug: { current: { eq: $slug } }) {
      title
      involved
      category
      author {
        name
      }
      date
      subtitle
      image {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
