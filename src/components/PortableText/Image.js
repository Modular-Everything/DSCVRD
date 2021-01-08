import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import clientConfig from '../../../client-config';

//

const Image = ({ node }) => {
  if (!node || !node.asset || !node.asset._ref) {
    return null;
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 1280 },
    clientConfig.sanity
  );

  return (
    <ImgWrap>
      <Img fluid={fluidProps} alt={node.alt} />
    </ImgWrap>
  );
};

export default Image;

const ImgWrap = styled.figure`
  margin: 0;
`;

Image.propTypes = {
  node: PropTypes.object.isRequired,
};
