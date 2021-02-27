import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const BurgerIcon = ({ callback, status, invert }) => {
  console.log(status);

  return (
    <Button type="button" onClick={callback} status={status} invert={invert}>
      <span />
      <span />
      <span />
    </Button>
  );
};

export default BurgerIcon;

const Button = styled.button`
  position: relative;
  width: 3.2rem;
  height: 2.4rem;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    transform-origin: center;
    transition: 150ms ease all;
    background-color: var(
      --${(props) => (!props.status || props.invert === 'dark' ? 'white' : 'black')}
    );

    &:nth-of-type(1) {
      top: ${(props) => (props.status ? 'calc(50% - 2px);' : 0)};
      transform: rotate(${(props) => (props.status ? '-45deg' : 0)});
    }

    &:nth-of-type(2) {
      top: calc(50% - 1px);
      transform: rotate(0);
      opacity: ${(props) => (props.status ? 0 : 1)};
    }

    &:nth-of-type(3) {
      bottom: ${(props) => (props.status ? '50%' : 0)};
      transform: rotate(${(props) => (props.status ? '45deg' : 0)});
    }
  }
`;

BurgerIcon.propTypes = {
  callback: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  invert: PropTypes.bool.isRequired,
};
