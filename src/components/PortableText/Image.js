import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'react-cool-img';

//

const Image = (props) => {
  const { node } = props;
  if (!node || !node.asset || !node.asset._ref) {
    return null;
  }

  let filename = node.asset._ref.replace('image-', '');
  filename = filename.replace(/-([^-]*)$/, '.$1');
  // eslint-disable-next-line react/destructuring-assignment
  const imgUrl = `https://cdn.sanity.io/images/${props.options.projectId}/production/${filename}`;

  return (
    <ImgWrap data-sal="fade">
      <Img
        placeholder={`${imgUrl}?w=10&h=10&blur=5&auto=format`}
        src={`${imgUrl}?w=1280&h=1024&auto=format`}
        alt=""
      />
    </ImgWrap>
  );
};

export default Image;

const ImgWrap = styled.figure`
  margin: 0 0 4rem;

  img {
    width: 100%;
  }
`;

Image.propTypes = {
  node: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};
