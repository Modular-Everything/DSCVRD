import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import sanityClient from '@sanity/client';
import _ from 'lodash';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import ArticleContent from '../components/ArticleContent';
import LiveVideo from '../components/LiveVideo';
import HeadlineArticle from '../components/HeadlineArticle';
import Container from '../components/Container';
import LongBanner from '../components/Adverts/LongBanner';
import ThreeThirds from '../components/Grids/ThreeThirds';
import ArticleCard from '../components/CardTypes/ArticleCard';
import MagazineCard from '../components/MagazineCard';
import clientConfig from '../../client-config';

//

const FetchPage = ({ data }) => {
  const idx = data.sanityIndexPage;
  const store = data.sanityStoreSettings;
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const client = sanityClient({
      projectId: clientConfig.sanity.projectId,
      dataset: clientConfig.sanity.dataset,
      token: process.env.SANITY_TOKEN,
      useCdn: false,
    });

    const groq = `
      *[_type == "article" && date <= now()] | order(date desc) {
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

  // * Grab all the headline data
  const { headline } = idx;

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
            image={store.storePreviewImage.asset.url}
            category="Store"
            link={store.storeLink}
            tags={['Records', 'Merch', 'Exclusives']}
            square
          />
          <MagazineCard />
        </ThreeThirds>
      </Container>

      {!articles && 'Loading...'}
      {articles && (
        <ArticleContent
          data={_.chunk(articles, 3)}
          story={idx.activeStory}
          leadArticle={idx.leadArticle}
        />
      )}
    </>
  );
};

export default FetchPage;

//

export const query = graphql`
  query {
    sanityStoreSettings(_id: { eq: "storeSettings" }) {
      storeLink
      storeTitle
      storeDesc
      storePreviewImage {
        asset {
          url
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
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

      leadArticle {
        title
        image {
          asset {
            url
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

FetchPage.propTypes = {
  data: PropTypes.object.isRequired,
};
