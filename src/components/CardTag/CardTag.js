import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardTag = ({ label, color }) => <Label className={color}>{label}</Label>;

export default CardTag;

const Label = styled.article`
  display: inline-block;
  padding: 1rem 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  text-transform: uppercase;

  &.yellow {
    background-color: var(--yellow);
    color: var(--black);
  }

  &.black {
    background-color: var(--black);
    color: var(--white);
  }
`;

CardTag.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};

CardTag.defaultProps = {
  color: 'black',
};
