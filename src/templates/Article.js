import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import HeadlineArticle from '../components/HeadlineArticle';
import Container from '../components/Container';
import LongBanner from '../components/Adverts/LongBanner';
import CardTag from '../components/CardTag';

//

const SingleArticlePage = ({ data }) => {
  const { article } = data;

  return (
    <>
      <HeadlineArticle
        title={article.title}
        involved={article.involved}
        category={article.category}
        author={article.author.name}
        image={article.image.asset.fluid}
      />

      <CenteredContainer>
        <LongBanner type={1} />

        {article.subtitle && <CardTag label={article.subtitle} />}
      </CenteredContainer>
    </>
  );
};

export default SingleArticlePage;

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
