import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

//

const Menu = ({ status }) => {
  console.log(status);

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

        <MenuWrapper>
          <h1>Soon 😎</h1>
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
`;

Menu.propTypes = {
  status: PropTypes.bool.isRequired,
};
