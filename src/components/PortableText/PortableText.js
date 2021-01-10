/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import clientConfig from '../../../client-config';

import Image from './Image';
import CopyBlock from './CopyBlock';

const PortableText = ({ content }) => {
  const serializers = {
    types: {
      youtube: (props) => <p>YouTube!</p>,
      image: Image,
      block: CopyBlock,
    },
    marks: {
      'strike-through': ({ children }) => <del>{children}</del>,
    },
  };

  console.log(content);

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
    align-self: center;
    margin-bottom: 4rem;
  }

  figure {
    display: unset;
    align-self: unset;
  }

  h2 {
    max-width: 64rem;
    color: var(--black);
  }

  h3 {
    max-width: 38rem;
    color: var(--coal);
  }
`;

PortableText.propTypes = {
  content: PropTypes.object.isRequired,
};
