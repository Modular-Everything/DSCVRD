import React from 'react';
import styled from 'styled-components';

const CategoryTitle = ({ title }) => (
  <Title>
    <h1>{title}</h1>
  </Title>
);

export default CategoryTitle;

const Title = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  bottom: 0;
  justify-content: center;
  width: 100%;
  padding: 5.6rem 0;
  background: var(--fade-from-bottom);
  text-align: center;

  h1 {
    color: var(--white);
    font-family: var(--font-sans);
    font-size: clamp(4.8rem, 9vw, 13.6rem);
    font-style: normal;
    font-weight: bold;
    line-height: clamp(5.6rem, 9vw, 13.8rem);
    text-transform: uppercase;

    @supports (-webkit-text-stroke: 1px var(--white)) {
      color: transparent;
      -webkit-text-stroke: 1px var(--white);
    }
  }
`;
