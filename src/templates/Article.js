// import dotenv from 'dotenv';

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

import clientConfig from '../../client-config';
import HeadlineArticle from '../components/HeadlineArticle';
import Container from '../components/Container';
import LongBanner from '../components/Adverts/LongBanner';
import CardTag from '../components/CardTag';

//

// * NOTE TO FUTURE SELF:
// ** You probably forgot to add the .env variables to Netlify
// ** Look in .env and add everything in there

const SingleArticlePage = ({ data }) => {
  const { article } = data;

  const serializers = {
    types: {
      youtube: (props) => <p>YouTube!</p>,
    },
  };

  console.log(clientConfig.sanity);

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

        <BlockContent
          blocks={article._rawContent}
          serializers={serializers}
          {...clientConfig.sanity}
        />
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
      _rawContent
    }
  }
`;
