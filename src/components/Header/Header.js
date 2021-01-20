import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Logo from '../../images/logo.png';
import Social from '../Social';
import BurgerIcon from './BurgerIcon';

//

const Header = ({ siteName }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    console.log('I came from Header.js');
  }

  return (
    <HeaderWrap>
      <div className="header__burger">
        <BurgerIcon callback={handleClick} />
      </div>

      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt={siteName} />
        </Link>
      </div>

      <div className="header__social">
        <Social invert small />
      </div>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  display: grid;
  position: fixed;
  z-index: 50;
  top: 0;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: calc(100% - 4.8rem);
  padding: 2.4rem;

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
