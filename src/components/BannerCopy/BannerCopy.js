import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const BannerCopy = ({ category, title, copy, involved, className }) => {
  let credits = null;

  if (involved) {
    credits = [...involved];
  }

  return (
    <BannerMeta className={className}>
      <div className="headline__meta--inner">
        <h5 className="font__spacey-subtitle">{category}</h5>
        <h2 className="font__big-headline-text">{title}</h2>

        {copy && <p className="font__article-card-copy">{copy}</p>}

        {credits && (
          <ul className="font__spacey-subtitle">
            {credits && credits.map((credit) => <li>{credit}</li>)}
          </ul>
        )}
      </div>
    </BannerMeta>
  );
};

export default BannerCopy;

const BannerMeta = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  bottom: 0;
  justify-content: center;
  width: 100%;
  padding-bottom: 5.6rem;
  background: var(--fade-from-bottom);
  text-align: center;

  .headline__meta--inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .font__article-card-copy {
    width: calc(100% - 4.8rem);
    max-width: 48rem;
    margin: 0 2.4rem 0;
    color: var(--white);
  }

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
`;

BannerCopy.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string,
  involved: PropTypes.array,
  className: PropTypes.string,
};

BannerCopy.defaultProps = {
  copy: null,
  involved: null,
  className: null,
};
