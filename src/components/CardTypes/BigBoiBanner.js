import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import BannerCopy from '../BannerCopy';
import LongBanner from '../Adverts/LongBanner';
import Noise from '../Noise';

//

const BigBoiBanner = ({ title, image, advert }) => {
  let advertType;
  if (advert % 3 === 1) advertType = 1;
  if (advert % 3 === 2) advertType = 2;
  if (advert % 3 === 0) advertType = 3;

  return (
    <>
      <Link to="/">
        <BigBoiWrapper>
          <BannerCopy
            title="Tom Karangelov Rides For WKND"
            category="Shred"
            copy="In pictures: Tom Karangelov’s career so far"
            className="bigboi__meta"
          />

          <div className="bigboi__image">
            <Noise />
            <img src={image} alt="" />
          </div>
        </BigBoiWrapper>
      </Link>

      <LongBanner type={advertType} />
    </>
  );
};

export default BigBoiBanner;

BigBoiBanner.propTypes = {};

const BigBoiWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80rem;

  .bigboi__meta {
    .font__big-headline-text {
      color: var(--yellow);
    }

    .font__spacey-subtitle {
      color: var(--white);
    }
  }

  .bigboi__image {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img,
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      padding-bottom: unset;
      object-fit: cover;
    }
  }
`;
