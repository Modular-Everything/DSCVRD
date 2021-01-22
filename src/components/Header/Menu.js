import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

//

const Menu = ({ status }) => {
  if (status) {
    return (
      <>
        <Helmet>
          <style type="text/css">
            {`
              body {
                overflow: hidden;
              }
            `}
          </style>
        </Helmet>

        <MenuWrapper theme="white">
          <ul>
            <li>
              <Link to="/">
                <h2>Drop</h2>
                <p>All things from the fashion aspect</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>Kulture</h2>
                <p>All things from the fashion aspect</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>Format</h2>
                <p>All things from the fashion aspect</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>Noise</h2>
                <p>All things from the fashion aspect</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>Shred</h2>
                <p>All things from the fashion aspect</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h2>Contact</h2>
                <p>All things from the fashion aspect</p>
              </Link>
            </li>
          </ul>
        </MenuWrapper>
      </>
    );
  }

  return null;
};

export default Menu;

const MenuWrapper = styled.nav`
  display: grid;
  position: fixed;
  z-index: 45;
  width: 100vw;
  height: 100vh;
  background-color: var(--yellow);
  place-items: center;

  ul {
    display: grid;
    grid-column-gap: 10rem;
    grid-row-gap: 2.4rem;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h2 {
    color: var(--${(props) => props.theme});
    font-size: 10.4rem;
    font-weight: bold;
    line-height: 11.4rem;
    text-transform: uppercase;

    @supports (-webkit-text-stroke: 1px var(--${(props) => props.theme})) {
      color: transparent;
      -webkit-text-stroke: 1px var(--${(props) => props.theme});
    }
  }

  a {
    text-decoration: none;

    @supports (-webkit-text-stroke: 1px var(--${(props) => props.theme})) {
      &:hover h2 {
        color: var(--${(props) => props.theme});
      }
    }
  }

  p {
    color: var(--${(props) => props.theme});
    font-family: var(--font-serif-copy);
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

Menu.propTypes = {
  status: PropTypes.bool.isRequired,
};
