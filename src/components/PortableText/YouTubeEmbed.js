import React from 'react';
import PropTypes from 'prop-types';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import styled from 'styled-components';

//

const YouTubeEmbed = ({ url }) => {
  const id = getYouTubeId(url);
  console.log(id);

  return (
    <YouTubeWrapper>
      <YouTube videoId={id} width="100%" />
    </YouTubeWrapper>
  );
};

export default YouTubeEmbed;

const YouTubeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  div,
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

YouTubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};
