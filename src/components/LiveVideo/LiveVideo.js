import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YouTube from 'react-youtube';

import getYouTubeID from 'get-youtube-id';
import LiveNow from './LiveNow';

//

const PlayButton = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9607 22C18.4835 22 22.9607 17.5228 22.9607 12C22.9607 6.47715 18.4835 2 12.9607 2C7.43785 2 2.96069 6.47715 2.96069 12C2.96069 17.5228 7.43785 22 12.9607 22Z"
      stroke="var(--yellow)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9607 8L16.9607 12L10.9607 16V8Z"
      stroke="var(--yellow)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

//

const LiveVideo = ({ source, live, title, buttonLabel }) => {
  const [overlay, setOverlay] = useState(true);
  const [video, setVideo] = useState(null);

  if (!source) return null;

  const id = getYouTubeID(source);

  function handlePlay() {
    setOverlay(false);
    video.target.unMute();
  }

  function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
    setVideo(event);
  }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      controls: 0,
    },
  };

  return (
    <LiveVideoWrap>
      {title && (
        <div className={`overlay ${overlay ? 'visible' : 'hidden'}`}>
          {live && <LiveNow />}
          <h2 className="font__big-headline-text">{title}</h2>
          <button
            type="button"
            className="font__spacey-subtitle"
            onClick={(e) => handlePlay(e)}
          >
            {buttonLabel}
            <PlayButton />
          </button>
        </div>
      )}

      <YouTube
        videoId={id}
        opts={opts}
        className="player"
        onReady={(e) => onPlayerReady(e)}
        // muted={volume === 0}
        // volume={volume}
        // loop={!live}
        // controls={volume === 1}
      />
    </LiveVideoWrap>
  );
};

export default LiveVideo;

const LiveVideoWrap = styled.section`
  position: relative;
  z-index: 450;
  width: 100%;
  min-height: 33vw;
  padding-top: 56.25%;

  @media (min-width: 768px) {
    min-height: unset;
  }

  .visible + .player {
    pointer-events: none;
  }

  .overlay {
    display: flex;
    position: absolute;
    z-index: 10;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 4.8rem);
    padding: 0 2.4rem 2.4rem 2.4rem;
    transition: 1s ease opacity;
    opacity: 1;
    background: transparent;
    background: var(--fade-from-bottom);
    text-align: center;

    @media (min-width: 768px) {
      padding-bottom: 5.6rem;
    }

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .font__big-headline-text {
      max-width: 110rem;
      color: var(--white);
    }

    button {
      display: flex;
      align-items: center;
      margin-top: 3.2rem;
      padding: 1.2rem 1.6rem;
      border: 1px solid var(--yellow);
      background: transparent;
      color: var(--yellow);
      /* font-size: 1.8rem; */
      /* font-weight: bold; */
      /* letter-spacing: 0.4rem; */
      /* line-height: 2.8rem; */
      text-align: center;
      /* text-transform: uppercase; */
      cursor: pointer;

      &:hover {
        border: 1px solid var(--white);
        color: var(--white);

        svg path {
          stroke: var(--white);
        }
      }

      svg {
        margin-left: 1.2rem;
      }
    }
  }

  .player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

LiveVideo.propTypes = {
  source: PropTypes.string,
  live: PropTypes.bool,
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
};

LiveVideo.defaultProps = {
  source: null,
  live: false,
  title: null,
  buttonLabel: 'Watch Now',
};
