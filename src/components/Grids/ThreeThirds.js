import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const ThreeThirds = ({ children, className }) => (
  <ThreeThirdsWrapper className={className}>{children}</ThreeThirdsWrapper>
);

export default ThreeThirds;

const ThreeThirdsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4.8rem 0;
  padding: 0;

  @media (min-width: 640px) {
    padding: 0 3.2rem;
  }

  @media (min-width: 768px) {
    padding: 0 4.8rem;
  }

  @media (min-width: 1024px) {
    padding: 0 6.4rem;
  }
`;

ThreeThirds.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ThreeThirds.defaultProps = {
  className: null,
};
