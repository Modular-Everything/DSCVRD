import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
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
  shorten,
}) => {
  const SharedContent = () => (
    <HeadlineArticleWrapper shorten={shorten}>
      {title && (
        <BannerCopy title={title} category={category} involved={involved} />
      )}

      {!title && category && <CategoryTitle title={category} />}

      <div className="headline__image">
        <Noise />
        <Img fluid={image} alt={title} />
      </div>
    </HeadlineArticleWrapper>
  );

  if (slug) {
    return (
      <Link to={`/${category}/${slug}`}>
        <SharedContent />
      </Link>
    );
  }

  return <SharedContent />;
};

export default HeadlineArticle;

const HeadlineArticleWrapper = styled.div`
  position: relative;
  z-index: 10;
  min-height: ${(props) => (props.shorten ? '70vh' : '80vh')};
  padding-top: 10rem;

  .headline__image {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
      height: 100%;
      padding-bottom: unset;
    }
  }
`;

HeadlineArticle.propTypes = {
  title: PropTypes.string,
  involved: PropTypes.array,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  shorten: PropTypes.bool,
};

HeadlineArticle.defaultProps = {
  title: null,
  involved: null,
  shorten: false,
};

//
