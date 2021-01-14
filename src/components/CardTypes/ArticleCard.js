import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Img from 'gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';

import Noise from '../Noise';
import CardTag from '../CardTag';

//

// TODO Add `image` to prop types

const ArticleCard = ({ title, image }) => (
  <Card>
    <Link to="/">
      <div className="card__thumb">
        <Noise />
        <img src={image} alt="" />
      </div>

      <div className="card__content">
        <h5 className="font__article-card-headline">{title}</h5>
        <p className="font__article-card-copy">
          {_.truncate(
            'I seem to remember this guy having a pretty good hip-hop collection, I seem to remember this guy having a pretty good hip-hop collection',
            {
              length: 100,
              separator: /,? +/,
            }
          )}
        </p>
      </div>

      <div className="card__tags">
        <CardTag label="Noise" />
        <CardTag label="Records" color="yellow" />
        <CardTag label="Hip-hop" color="yellow" />
      </div>
    </Link>
  </Card>
);

export default ArticleCard;

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
};

const Card = styled.div`
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
  }

  .card__thumb {
    position: relative;
    height: 32rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (min-width: 1280px) {
      height: 48rem;
    }
  }

  .card__content {
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
