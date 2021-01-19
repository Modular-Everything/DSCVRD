import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import HeadlineArticle from '../components/HeadlineArticle';
import Container from '../components/Container';
import LongBanner from '../components/Adverts/LongBanner';
import CardTag from '../components/CardTag';
import PortableText from '../components/PortableText';
import Credits from '../components/Credits';
import Social from '../components/Social';
import SEO from '../components/SEO';

//

// * NOTE TO FUTURE SELF:
// ** You probably forgot to add the .env variables to Netlify
// ** Look in .env and add everything in there

const SingleArticlePage = ({ data }) => {
  const { article } = data;

  return (
    <>
      <SEO title={article.title} />

      <HeadlineArticle
        title={article.title}
        involved={article.involved}
        category={article.category}
        image={article.image.asset.fluid}
        shorten
      />

      <CenteredContainer>
        <LongBanner type={1} />

        {article.subtitle && (
          <Subtitle>
            <CardTag label={article.subtitle} />
          </Subtitle>
        )}

        {article._rawContent && <PortableText content={article._rawContent} />}
        {article.content && <PortableText content={article.content} />}

        <Credits involved={article.involved} published={article.date} />

        <Social />

        <LongBanner type={Math.ceil(Math.random() * 3)} />
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

const Subtitle = styled.div`
  margin-bottom: 4rem;
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
      date(formatString: "d MMM YYYY")
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
