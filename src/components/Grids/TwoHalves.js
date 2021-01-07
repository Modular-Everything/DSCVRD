import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ThreeThirds from './ThreeThirds';

//

const TwoHalves = ({ children }) => (
  <TwoHalvesWrapper>{children}</TwoHalvesWrapper>
);

export default TwoHalves;

const TwoHalvesWrapper = styled(ThreeThirds)`
  grid-template-columns: repeat(2, 1fr);
`;

TwoHalves.propTypes = {
  children: PropTypes.node.isRequired,
};
