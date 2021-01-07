import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const ThreeThirds = ({ children, className }) => (
  <ThreeThirdsWrapper className={className}>{children}</ThreeThirdsWrapper>
);

export default ThreeThirds;

const ThreeThirdsWrapper = styled.div`
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 4.8rem 0;
  padding: 0 6.4rem;
`;

ThreeThirds.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ThreeThirds.defaultProps = {
  className: null,
};
