import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InstagramEmbed from 'react-instagram-embed';

//

const InstaEmbed = ({ url }) => (
  <InstaWrap>
    <InstagramEmbed
      url={url}
      clientAccessToken="139063768000268|972300ba22f0b20c435368f566eabc84"
    />
  </InstaWrap>
);

export default InstaEmbed;

const InstaWrap = styled.div`
  width: 100%;
  max-width: 50rem;
`;

InstaEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};
