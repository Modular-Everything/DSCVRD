import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const BurgerIcon = ({ callback, status, invert }) => (
  <Button type="button" onClick={callback} status={status} invert={invert}>
    <span />
    <span />
    <span />
  </Button>
);

export default BurgerIcon;

const Button = styled.button`
  display: grid;
  grid-gap: 0.7rem;
  grid-template-rows: 1fr 1fr 1fr;
  width: 4rem;
  height: 2.5rem;
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  span {
    width: 100%;
    height: 2px;
    background-color: var(
      --${(props) => (!props.status || props.invert === 'dark' ? 'white' : 'black')}
    );
  }
`;

BurgerIcon.propTypes = {
  callback: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  invert: PropTypes.bool.isRequired,
};
