import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import BannerCopy from '../BannerCopy';
import Noise from '../Noise';

//

const HeadlineArticle = ({
  title,
  involved,
  category,
  author,
  slug,
  image,
}) => {
  const SharedContent = () => (
    <HeadlineArticleWrapper>
      <BannerCopy
        title={title}
        category={category}
        author={author}
        involved={involved}
      />

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
  height: 90vh;

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
  title: PropTypes.string.isRequired,
  involved: PropTypes.array,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

HeadlineArticle.defaultProps = {
  involved: null,
};

//
