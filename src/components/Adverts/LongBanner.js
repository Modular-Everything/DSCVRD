import React from 'react';
import styled from 'styled-components';

import PLACEHOLDER from '../../images/banner_placeholder.png';

//

const LongBanner = () => (
  <a href="https://google.com/" target="_blank" rel="noreferrer noopener">
    <BannerWrapper>
      <img src={PLACEHOLDER} alt="Placeholder banner that needs changing" />
    </BannerWrapper>
  </a>
);

export default LongBanner;

const BannerWrapper = styled.div`
  width: 100%;
  margin: 4.8rem 0;

  img {
    width: 100%;
  }
`;
