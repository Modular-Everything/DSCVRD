import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiFacebook, FiTwitter, FiInstagram, FiLink } from 'react-icons/fi';

//

const Social = ({ invert, className }) => (
  <SocialIcons invert={invert} className={className}>
    <li>
      <a href="/">
        <FiFacebook />
      </a>
    </li>
    <li>
      <a href="/">
        <FiTwitter />
      </a>
    </li>
    <li>
      <a href="/">
        <FiInstagram />
      </a>
    </li>
    <li>
      <a href="/">
        <FiLink />
      </a>
    </li>
  </SocialIcons>
);

export default Social;

const SocialIcons = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    margin: 0 0.4rem;
    transition: 250ms ease all;
    border: 2px solid var(--${(props) => (props.invert ? 'white' : 'black')});
    border-radius: 100%;
    background-color: transparent;
    color: var(--${(props) => (props.invert ? 'white' : 'black')});

    &:hover {
      background-color: var(--${(props) => (props.invert ? 'white' : 'black')});
      color: var(--${(props) => (props.invert ? 'black' : 'yellow')});
    }
  }
`;

Social.propTypes = {
  invert: PropTypes.bool,
  className: PropTypes.string,
};

Social.defaultProps = {
  invert: false,
  className: null,
};
