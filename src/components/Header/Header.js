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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderWrap status={menuOpen}>
        <div className="header__burger">
          <BurgerIcon
            callback={() => setMenuOpen(!menuOpen)}
            status={menuOpen}
          />
        </div>

        <div className="header__logo">
          <Link to="/">
            <img src={!menuOpen ? LogoWhite : LogoBlack} alt={siteName} />
          </Link>
        </div>

        <div className="header__social">
          <Social invert={!menuOpen} small />
        </div>
      </HeaderWrap>

      <HeaderBg>
        <Noise />
      </HeaderBg>

      <Menu status={menuOpen} />
    </>
  );
};

export default Header;

const HeaderBg = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 10rem;
  opacity: 0.99;
  background-color: var(--black);
`;

const HeaderWrap = styled.header`
  display: grid;
  position: fixed;
  z-index: 50;
  top: 0;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: calc(100% - 4.8rem);
  height: 10rem;
  padding: 0 2.4rem;
  ${(props) => !props.status && `background-image: var(--fade-from-top);`}

  .header__burger {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .header__logo a {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
    }
  }

  .header__social {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};
