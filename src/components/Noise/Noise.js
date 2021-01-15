import React from 'react';
import styled from 'styled-components';

import Grain from '../../images/noise.png';

//

const Noise = () => <NoiseWrap />;

export default Noise;

const NoiseWrap = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${Grain});
  pointer-events: none;
`;
