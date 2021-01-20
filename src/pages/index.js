import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _ from 'lodash';

import HeadlineArticle from '../components/HeadlineArticle';
import ArticleContent from '../components/ArticleContent';
import Container from '../components/Container';
import LongBanner from '../components/Adverts/LongBanner';
import ArticleCard from '../components/CardTypes/ArticleCard';
import ThreeThirds from '../components/Grids/ThreeThirds';
import MagazineCard from '../components/MagazineCard';

import SEO from '../components/SEO';

//

const HomePage = ({ data }) => {
  const idx = data.sanityIndexPage;
  const articles = data.allSanityArticle;

  // * Grab all the headline data
  const { headline } = idx;

  // * Get all of the articles
  const { nodes } = articles;
  const chunked = _.chunk(nodes, 3);

  return (
    <>
      <SEO title="International Music &amp; Entertainment Magazine" />

      <HeadlineArticle
        title={headline.title}
        involved={headline.involved}
        category={headline.category}
        slug={headline.slug.current}
        image={headline.image.asset.fluid}
      />

      <Container>
        <LongBanner type={1} />

        <ThreeThirds>
          <ArticleCard
            title="Mindforce - Excalibur"
            copy="£20.00 + P&amp;P — limited edition vinyl colourway available now exclusively in the Discovered shop."
            image="https://cdn.sanity.io/images/lylk5ufs/production/56a82e8c3b2a2822cc478b56cc88314faf70f5c3-2896x1799.jpg?w=1000&h=1000&fit=max"
          />
          <MagazineCard />
        </ThreeThirds>
      </Container>

      <ArticleContent data={chunked} story={idx.activeStory} />
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
        tags: articleType
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

    sanityIndexPage(_id: { eq: "indexPage" }) {
      headline {
        title
        involved
        category
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
