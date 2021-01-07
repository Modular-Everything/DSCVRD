import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PLACEHOLDER1 from '../../images/banner_placeholder__1.png';
import PLACEHOLDER2 from '../../images/banner_placeholder__2.png';
import PLACEHOLDER3 from '../../images/banner_placeholder__3.png';

//

const LongBanner = ({ type }) => (
  <a href="https://google.com/" target="_blank" rel="noreferrer noopener">
    <BannerWrapper>
      {type === 1 && (
        <img src={PLACEHOLDER1} alt="Placeholder banner that needs changing" />
      )}
      {type === 2 && (
        <img src={PLACEHOLDER2} alt="Placeholder banner that needs changing" />
      )}
      {type === 3 && (
        <img src={PLACEHOLDER3} alt="Placeholder banner that needs changing" />
      )}
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

LongBanner.propTypes = {
  type: PropTypes.number,
};

LongBanner.defaultProps = {
  type: 1,
};
