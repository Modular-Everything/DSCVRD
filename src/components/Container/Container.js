import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const breakpoints = [640, 768, 1024, 1280];

const PageContainer = styled.div`
  position: relative;
  width: calc(100% - 4rem);
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  ${breakpoints.map(
    (bp) => `@media(min-width: ${bp}px) { max-width: ${bp}px; }`
  )}
`;

const Container = ({ children, className }) => (
  <PageContainer className={className}>{children}</PageContainer>
);

export default Container;

//

Container.defaultProps = {
  className: null,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
