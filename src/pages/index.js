import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _ from 'lodash';
import moment from 'moment';

import HeadlineArticle from '../components/HeadlineArticle';
import ArticleContent from '../components/ArticleContent';
import Container from '../components/Container';
import LongBanner from '../components/Adverts/LongBanner';
import ArticleCard from '../components/CardTypes/ArticleCard';
import ThreeThirds from '../components/Grids/ThreeThirds';
import MagazineCard from '../components/MagazineCard';
import LiveVideo from '../components/LiveVideo';

import SEO from '../components/SEO';

//

const HomePage = ({ data }) => {
  const idx = data.sanityIndexPage;
  const articles = data.allSanityArticle;
  const store = data.sanityStoreSettings;

  // * Grab all the headline data
  const { headline } = idx;

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
      <SEO title="International Music &amp; Entertainment Magazine" />

      {idx.liveVideoToggle && idx.liveVideo ? (
        <LiveVideo
          source={idx.liveVideo}
          live={idx.liveVideoLive}
          title={idx.liveVideoTitle}
          buttonLabel={idx.liveVideoButtonLabel}
        />
      ) : (
        <HeadlineArticle
          title={headline.title}
          involved={headline.involved}
          category={headline.category}
          slug={headline.slug.current}
          image={headline.image.asset.fluid}
        />
      )}

      <Container>
        <LongBanner type={1} />

        <ThreeThirds>
          <ArticleCard
            title={store.storeTitle}
            desc={store.storeDesc}
            image={store.storePreviewImage.asset.fluid}
            category="Store"
            link={store.storeLink}
            tags={['Records', 'Merch', 'Exclusives']}
            square
          />
          <MagazineCard />
        </ThreeThirds>
      </Container>

      <ArticleContent
        data={chunked}
        story={idx.activeStory}
        leadArticle={idx.leadArticle}
      />
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
    sanityStoreSettings(_id: { eq: "storeSettings" }) {
      storeLink
      storeTitle
      storeDesc
      storePreviewImage {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }

    allSanityArticle(
      sort: { fields: date, order: DESC }
      filter: { _id: { glob: "!drafts*" } }
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
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }

    sanityIndexPage(_id: { eq: "indexPage" }) {
      liveVideo
      liveVideoLive
      liveVideoTitle
      liveVideoButtonLabel
      liveVideoToggle

      headline {
        title
        involved
        category
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1280) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

      leadArticle {
        title
        image {
          asset {
            fluid(maxWidth: 800) {
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
            fluid(maxWidth: 800) {
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
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
