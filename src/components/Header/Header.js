import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Headroom from 'headroom.js';

import LogoWhite from '../../images/logo__white.png';
import LogoBlack from '../../images/logo__black.png';
import Social from '../Social';
import BurgerIcon from './BurgerIcon';
import Noise from '../Noise';
import Menu from './Menu';
import Search from '../Search';

//

const Header = ({ siteName }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [assetColor, setAssetColor] = useState('light');

  const headerRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const headroom = new Headroom(headerRef.current);
    headroom.init();

    const backHeadroom = new Headroom(backRef.current);
    backHeadroom.init();
  }, []);

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
    setContactOpen(false);
  }

  return (
    <>
      <Search visible={searchOpen} toggle={setSearchOpen} />

      <HeaderWrap status={menuOpen} ref={headerRef} className="headroom">
        <div className="header__nav-control">
          <div className="header__burger">
            <BurgerIcon
              callback={() => handleMenuOpen()}
              status={menuOpen}
              invert={assetColor}
            />
          </div>

          <div className="header__search">
            <button type="button" onClick={() => setSearchOpen(true)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.0002 28L22.2002 22.2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="header__logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
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

      <HeaderBg ref={backRef} className="headroom">
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

  .header__nav-control {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    order: 3;

    @media (min-width: 666px) {
      flex-direction: row;
      order: unset;
    }
  }

  .header__burger {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .header__search {
    margin-right: 3.2rem;

    @media (min-width: 666px) {
      margin-left: 3.2rem;
    }

    button {
      margin: 0;
      padding: 0;
      border: 0;
      background: transparent;
      color: var(--white);
      cursor: pointer;

      &:hover {
        color: var(--yellow);
      }
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
