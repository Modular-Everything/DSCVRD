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
              fluid(maxWidth: 800) {
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
              fluid(maxWidth: 800) {
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
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const { sanityAdSelection: ad } = data;

  const primaryBanner = ad.bannerPrimary;
  const secondaryBanner = ad.bannerSecondary
    ? ad.bannerSecondary
    : primaryBanner;
  const tertiaryBanner = ad.bannerTertiary ? ad.bannerTertiary : primaryBanner;

  return (
    <BannerWrapper data-sal="fade">
      {type === 1 && primaryBanner && (
        <a href={primaryBanner.url} target="_blank" rel="noreferrer noopener">
          {primaryBanner.wideImage.asset.extension === 'gif' ? (
            <img
              src={primaryBanner.wideImage.asset.url}
              alt={primaryBanner.name}
            />
          ) : (
            <Img
              fluid={primaryBanner.wideImage.asset.fluid}
              alt={primaryBanner.name}
            />
          )}
        </a>
      )}

      {type === 2 && (
        <a href={secondaryBanner.url} target="_blank" rel="noreferrer noopener">
          {secondaryBanner.wideImage.asset.extension === 'gif' ? (
            <img
              src={ad.bannerPrimary.wideImage.asset.url}
              alt={secondaryBanner.name}
            />
          ) : (
            <Img
              fluid={secondaryBanner.wideImage.asset.fluid}
              alt={secondaryBanner.name}
            />
          )}
        </a>
      )}

      {type === 3 && (
        <a href={tertiaryBanner.url} target="_blank" rel="noreferrer noopener">
          {tertiaryBanner.wideImage.asset.extension === 'gif' ? (
            <img
              src={ad.bannerPrimary.wideImage.asset.url}
              alt={tertiaryBanner.name}
            />
          ) : (
            <Img
              fluid={tertiaryBanner.wideImage.asset.fluid}
              alt={tertiaryBanner.name}
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
