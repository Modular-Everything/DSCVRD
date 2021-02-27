import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

//

const LongBanner = ({ type }) => {
  const data = useStaticQuery(graphql`
    query {
      sanityAdSelection(_id: { eq: "allAds" }) {
        bannerPrimary {
          name
          url
          wideImage {
            asset {
              url
              extension
              fluid(maxWidth: 1280) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        bannerSecondary {
          name
          url
          wideImage {
            asset {
              url
              extension
              fluid(maxWidth: 1280) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        bannerTertiary {
          name
          url
          wideImage {
            asset {
              url
              extension
              fluid(maxWidth: 1280) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const { sanityAdSelection: ad } = data;

  return (
    <BannerWrapper>
      {type === 1 && (
        <a
          href={ad.bannerPrimary.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {ad.bannerPrimary.wideImage.asset.extension === 'gif' ? (
            <img
              src={ad.bannerPrimary.wideImage.asset.url}
              alt={ad.bannerPrimary.name}
            />
          ) : (
            <Img
              fluid={ad.bannerPrimary.wideImage.asset.fluid}
              alt={ad.bannerPrimary.name}
            />
          )}
        </a>
      )}

      {type === 2 && (
        <a
          href={ad.bannerSecondary.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {ad.bannerSecondary.wideImage.asset.extension === 'gif' ? (
            <img
              src={ad.bannerPrimary.wideImage.asset.url}
              alt={ad.bannerSecondary.name}
            />
          ) : (
            <Img
              fluid={ad.bannerSecondary.wideImage.asset.fluid}
              alt={ad.bannerSecondary.name}
            />
          )}
        </a>
      )}

      {type === 3 && (
        <a
          href={ad.bannerTertiary.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {ad.bannerTertiary.wideImage.asset.extension === 'gif' ? (
            <img
              src={ad.bannerPrimary.wideImage.asset.url}
              alt={ad.bannerTertiary.name}
            />
          ) : (
            <Img
              fluid={ad.bannerTertiary.wideImage.asset.fluid}
              alt={ad.bannerTertiary.name}
            />
          )}
        </a>
      )}
    </BannerWrapper>
  );
};

export default LongBanner;

const BannerWrapper = styled.div`
  width: 100%;
  margin: 4.8rem 0;

  img {
    width: 100%;
  }
`;

LongBanner.propTypes = {
  type: PropTypes.number,
};

LongBanner.defaultProps = {
  type: 1,
};
