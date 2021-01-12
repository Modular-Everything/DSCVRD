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

  a {
    transition: 250ms ease background-color;
    color: var(--black);

    &:hover {
      background-color: var(--yellow);
    }
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

  ul,
  ol {
    margin-top: 0;
    margin-left: 0;

    /* This should match .font__copy in Typography.js */
    font-family: var(--font-serif);
    font-size: 1.6rem;
    line-height: 2.6rem;
  }

  blockquote {
    display: inline;
    max-width: 96rem;
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
    color: var(--white);
    font-family: var(--font-sans);
    font-size: 3.6rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    line-height: 4.2rem;
    text-align: center;
    text-shadow: -1px 0 var(--black), 0 1px var(--black), 1px 0 var(--black),
      0 -1px var(--black);
    text-transform: uppercase;

    @media (min-width: 666px) {
      font-size: 4.4rem;
      letter-spacing: 0.2rem;
      line-height: 5.2rem;
    }

    @supports (-webkit-text-stroke: 1px var(--black)) {
      text-shadow: unset;
      -webkit-text-stroke: 1px var(--black);
    }

    strong {
      color: var(--black);
      text-shadow: unset;

      @supports (-webkit-text-stroke: 1px var(--black)) {
        -webkit-text-stroke: unset;
      }
    }
  }
`;

PortableText.propTypes = {
  content: PropTypes.object.isRequired,
};
