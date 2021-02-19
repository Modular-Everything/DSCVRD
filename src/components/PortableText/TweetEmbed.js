import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tweet } from 'react-twitter-widgets';

//

const TweetEmbed = ({ tweetId }) => (
  <TweetWrap>
    <Tweet tweetId={tweetId} />
  </TweetWrap>
);

export default TweetEmbed;

const TweetWrap = styled.div`
  width: 100%;
  max-width: 50rem;
`;

TweetEmbed.propTypes = {
  tweetId: PropTypes.string.isRequired,
};
