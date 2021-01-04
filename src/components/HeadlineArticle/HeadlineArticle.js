import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled, { createGlobalStyle } from 'styled-components';

//

const HeadlineArticle = ({
  title,
  involved,
  category,
  author,
  slug,
  image,
}) => {
  console.log(image);

  return (
    <Link to={`/${category}/${slug}`}>
      <HeadlineArticleWrapper>
        <div className="headline__meta">
          <div className="headline__meta--inner">
            <h5 className="font__spacey-subtitle">{category}</h5>
            <h2 className="font__big-headline-text">{title}</h2>

            <ul className="font__spacey-subtitle">
              <li>Words by {author}</li>
              {involved.map((credit) => (
                <li>{credit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="headline__image">
          <Img fluid={image} src={title} />
        </div>
      </HeadlineArticleWrapper>
    </Link>
  );
};

export default HeadlineArticle;

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

const HeadlineArticleWrapper = styled.div`
  position: relative;
  height: 90vh;

  .headline__meta {
    display: flex;
    position: absolute;
    z-index: 10;
    bottom: 0;
    justify-content: center;
    width: 100%;
    padding: 5.6rem 0;
    background: var(--fade-from-bottom);
    text-align: center;

    .font__big-headline-text {
      max-width: 110rem;
      margin: 3.2rem;
      color: var(--white);

      @media screen and (min-width: 666px) {
        margin: 5.6rem;
      }
    }

    .font__spacey-subtitle {
      color: var(--yellow);
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

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
