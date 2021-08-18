import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import CoolImg from 'react-cool-img';
import styled from 'styled-components';
import CategoryTitle from '../CategoryTitle';

import BannerCopy from '../BannerCopy';
import Noise from '../Noise';

//

const HeadlineArticle = ({
  title,
  involved,
  category,
  slug,
  image,
  rawImg,
  shorten,
}) => {
  const SharedContent = () => (
    <HeadlineArticleWrapper shorten={shorten} data-sal="fade">
      {title && (
        <BannerCopy title={title} category={category} involved={involved} />
      )}

      {!title && category && <CategoryTitle title={category} />}

      <div className="headline__image">
        <Noise />
        {image && <Img fluid={image} alt={title} />}
        {rawImg && (
          <CoolImg
            placeholder={`${rawImg}?w=10&h=10&blur=5&auto=format`}
            src={`${rawImg}?w=1080&h=1080&auto=format`}
            alt={title}
          />
        )}
      </div>
    </HeadlineArticleWrapper>
  );

  if (slug) {
    return (
      <HeadlineLink to={`/${category}/${slug}`}>
        <SharedContent />
      </HeadlineLink>
    );
  }

  return <SharedContent />;
};

export default HeadlineArticle;

const HeadlineLink = styled(Link)`
  text-decoration: none;
`;

const HeadlineArticleWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 450;
  align-items: flex-end;
  justify-content: stretch;
  min-height: ${(props) => (props.shorten ? '70vh' : '80vh')};
  padding-top: 10rem;

  .headline__image {
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

HeadlineArticle.propTypes = {
  title: PropTypes.string,
  involved: PropTypes.array,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object,
  rawImg: PropTypes.string,
  shorten: PropTypes.bool,
};

HeadlineArticle.defaultProps = {
  title: null,
  involved: null,
  shorten: false,
  image: null,
  rawImg: null,
};

//
