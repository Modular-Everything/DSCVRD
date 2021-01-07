import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

//

const ArticleCard = ({ title, image }) => (
  <Card>
    <div className="card__thumb">
      <img src={image} alt="" />
    </div>

    <div className="card__content">
      <h5 className="font__article-card-headline">{title}</h5>
      <p className="font__article-card-copy">
        I seem to remember this guy having a pretty good hip-hop collection
      </p>
    </div>

    {/* <ul className="card__tags">
      <li>Noise</li>
      <li>Records</li>
      <li>Hip-hop</li>
    </ul> */}
  </Card>
);

export default ArticleCard;

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
};

const Card = styled.div`
  .card__thumb {
    height: 48rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card__content {
    .font__article-card-headline {
      margin: 1.6rem 0;
    }
  }
`;