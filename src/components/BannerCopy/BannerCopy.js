import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

//

const BannerCopy = ({ category, title, copy, involved, className }) => {
  let credits = null;

  if (involved) {
    credits = [...involved];
  }

  return (
    <BannerMeta className={className}>
      <div className="headline__meta--inner">
        <h5 className="font__spacey-subtitle">
          <Link to={`/${category}`}>{category}</Link>
        </h5>
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
  position: relative;
  z-index: 10;
  bottom: 0;
  justify-content: center;
  width: 100%;
  padding: 5.6rem 0;
  background: var(--fade-from-bottom);
  text-align: center;

  .headline__meta--inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .font__article-card-copy {
    width: calc(100% - 4.8rem);
    max-width: 48rem;
    margin: 0 2.4rem 0;
    color: var(--white);
  }

  .font__big-headline-text {
    width: calc(100% - 4.8rem);
    max-width: 110rem;
    margin: 3.2rem 2.4rem;
    color: var(--white);
    word-wrap: break-word;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;

    @media screen and (min-width: 666px) {
      margin: 5.6rem;
    }
  }

  .font__spacey-subtitle,
  .font__spacey-subtitle a {
    color: var(--yellow);
    text-decoration: none;
  }

  .font__spacey-subtitle a:hover {
    border-bottom: 2px solid var(--yellow);
  }

  ul {
    margin: 0 3.2rem;
    padding: 0;
    list-style: none;

    @media screen and (min-width: 666px) {
      margin: 0 5.6rem;
    }
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
