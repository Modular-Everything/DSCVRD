import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import LogoWhite from '../../images/logo__white.png';
import LogoBlack from '../../images/logo__black.png';
import Social from '../Social';
import BurgerIcon from './BurgerIcon';
import Noise from '../Noise';
import Menu from './Menu';

//

const Header = ({ siteName }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);
  const [assetColor, setAssetColor] = useState('light');

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
    setContactOpen(false);
  }

  return (
    <>
      <HeaderWrap status={menuOpen}>
        <div className="header__burger">
          <BurgerIcon
            callback={() => handleMenuOpen()}
            status={menuOpen}
            invert={assetColor}
          />
        </div>

        <div className="header__logo">
          <Link to="/">
            <img
              src={!menuOpen || assetColor === 'dark' ? LogoWhite : LogoBlack}
              alt={siteName}
            />
          </Link>
        </div>

        <div className="header__social">
          <Social invert={!menuOpen || assetColor === 'dark'} small />
        </div>
      </HeaderWrap>

      <HeaderBg>
        <Noise />
      </HeaderBg>

      <Menu
        status={menuOpen}
        contact={{ contactOpen, setContactOpen }}
        theme={{ assetColor, setAssetColor }}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
};

export default Header;

const HeaderBg = styled.div`
  position: fixed;
  z-index: 400;
  top: 0;
  width: 100%;
  height: 10rem;
  opacity: 0.99;
  background-color: var(--black);
`;

const HeaderWrap = styled.header`
  display: grid;
  position: fixed;
  z-index: 500;
  top: 0;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: calc(100% - 4.8rem);
  height: 10rem;
  padding: 0 2.4rem;
  ${(props) => !props.status && `background-image: var(--fade-from-top);`}

  @media (min-width: 666px) {
    grid-template-columns: 1fr auto 1fr;
  }

  .header__burger {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    order: 3;

    @media (min-width: 666px) {
      justify-content: flex-start;
      order: unset;
    }
  }

  .header__logo a {
    display: flex;
    align-items: center;
    justify-content: start;

    @media (min-width: 666px) {
      justify-content: center;
    }

    img {
      width: 50%;
    }
  }

  .header__social {
    display: none;

    @media (min-width: 666px) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};
