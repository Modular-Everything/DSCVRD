/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import clientConfig from '../../../client-config';

import Image from './Image';
import CopyBlock from './CopyBlock';
import YouTubeEmbed from './YouTubeEmbed';

const PortableText = ({ content }) => {
  const serializers = {
    types: {
      youtube: ({ node }) => <YouTubeEmbed url={node.url} />,
      image: Image,
    },
    marks: {
      'strike-through': ({ children }) => <del>{children}</del>,
    },
  };

  return (
    <Content
      blocks={content}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  );
};

export default PortableText;

const Content = styled(BlockContent)`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 4rem;
  }

  figure {
    display: unset;
    align-self: unset;
  }

  p {
    display: unset;
    max-width: 82rem;
    columns: 2;
    column-gap: 6.4rem;

    /* This should match .font__copy in Typography.js */
    font-family: var(--font-serif);
    font-size: 1.6rem;
    line-height: 2.6rem;
  }

  h2 {
    max-width: 64rem;
    color: var(--black);

    /* This should match .font__header-two in Typography.js */
    font-family: var(--font-serif);
    font-size: 4.2rem;
    font-weight: 400;
    line-height: 4.6rem;
    text-align: center;
  }

  h3 {
    max-width: 38rem;
    color: var(--coal);

    /* This should match .font__header-three in Typography.js */
    font-family: var(--font-serif);
    font-size: 1.8rem;
    font-style: italic;
    line-height: 2.8rem;
    text-align: center;
  }

  h5 {
    max-width: 38rem;

    /* This should match .font__copy in Typography.js */
    font-family: var(--font-serif);
    font-size: 1.6rem;
    line-height: 2.6rem;
    text-align: center;
  }
`;

PortableText.propTypes = {
  content: PropTypes.object.isRequired,
};
