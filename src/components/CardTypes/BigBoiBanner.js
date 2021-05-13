import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'react-cool-img';

import BannerCopy from '../BannerCopy';
import LongBanner from '../Adverts/LongBanner';
import Noise from '../Noise';

//

const BigBoiBanner = ({ title, image, advert, category, desc, slug }) => {
  let advertType;
  if (advert % 3 === 1) advertType = 1;
  if (advert % 3 === 2) advertType = 2;
  if (advert % 3 === 0) advertType = 3;

  return (
    <>
      <Link to={`/${category}/${slug}`}>
        <BigBoiWrapper data-sal="fade">
          <BannerCopy
            title={title}
            category={category}
            copy={desc}
            className="bigboi__meta"
          />

          <div className="bigboi__image">
            <Noise />
            <Img
              placeholder={`${image}?w=10&h=10&blur=5&auto=format`}
              src={`${image}?w=1080&h=1080&auto=format`}
              alt={title}
            />
          </div>
        </BigBoiWrapper>
      </Link>

      <LongBanner type={advertType} />
    </>
  );
};

export default BigBoiBanner;

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

BigBoiBanner.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  advert: PropTypes.number,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

BigBoiBanner.defaultProps = {
  advert: 1,
  desc: null,
};
