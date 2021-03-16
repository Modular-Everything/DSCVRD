import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'react-cool-img';
import _ from 'lodash';

import Noise from '../Noise';
import CardTag from '../CardTag';

//

const ArticleCard = ({
  title,
  category,
  slug,
  image,
  desc,
  tags,
  link,
  noCategory,
  square,
}) => {
  if (!slug && !link) return null;

  const ArticleContent = () => (
    <>
      <div className={`card__thumb ${square && 'square'}`}>
        <Noise />
        <Img
          placeholder={`${image}?w=10&h=10&blur=5`}
          src={`${image}?w=1080&h=1080`}
          alt={title}
        />
      </div>

      <div className="card__content">
        <h5 className="font__article-card-headline">
          {_.truncate(title, { length: 65, separator: /,? +/ })}
        </h5>
        <p className="font__article-card-copy">
          {_.truncate(desc, {
            length: 100,
            separator: /,? +/,
          })}
        </p>
      </div>

      <div className="card__tags">
        {!noCategory && category && <CardTag label={category} />}
        {tags && (
          <>
            {typeof tags === 'string' && (
              <CardTag label={tags} color="yellow" />
            )}

            {typeof tags === 'object' &&
              tags.map((tag) => <CardTag label={tag} color="yellow" />)}
          </>
        )}
      </div>
    </>
  );

  if (link) {
    return (
      <Card data-sal="fade">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <ArticleContent />
        </a>
      </Card>
    );
  }

  return (
    <Card data-sal="fade">
      <Link to={`/${category}/${slug}`}>
        <ArticleContent />
      </Link>
    </Card>
  );
};

export default ArticleCard;

const Card = styled.div`
  position: relative;
  z-index: 0;
  flex: 1 1 23.2rem;
  margin: 0 0 2.4rem 0;

  @media (max-width: 504px) {
    &:last-of-type {
      margin: 0;
    }
  }

  @media (min-width: 504px) {
    margin: 1.2rem;
  }

  a {
    color: var(--black);
    text-decoration: none;

    &:hover img {
      transform: scale(1.1);
    }
  }

  .card__thumb {
    position: relative;
    height: 32rem;
    overflow: hidden;

    &.square {
      height: 32rem;

      @media (min-width: 1280px) {
        height: 48rem;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 250ms cubic-bezier(0.19, 1, 0.22, 1) all;
    }

    @media (min-width: 1280px) {
      height: 40rem;
    }
  }

  .card__content {
    @media (min-width: 768px) {
      max-width: 90%;
    }

    .font__article-card-copy {
      margin-right: 1.6rem;
      color: var(--coal);
    }

    .font__article-card-headline {
      margin: 1.6rem 0 0.8rem;

      @media (min-width: 1024px) {
        margin: 1.6rem 0;
      }
    }
  }

  .card__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.2rem;

    @media (min-width: 1024px) {
      margin-top: 1.6rem;
    }

    article {
      margin: 0 0.8rem 0.8rem 0;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.object.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  noCategory: PropTypes.bool,
  square: PropTypes.bool,
};

ArticleCard.defaultProps = {
  tags: null,
  slug: null,
  link: null,
  noCategory: false,
  square: false,
};
