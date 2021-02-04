import React from 'react';
import styled, { keyframes } from 'styled-components';

//

const Loading = () => {
  const NOUNS = [
    'Generating some NOISE',
    'FORMATTING',
    'SHREDDING',
    'Getting some KULTURE',
    "DROP it like it's hot",
  ];

  const PICK_AT_RANDOM = Math.ceil(Math.random() * NOUNS.length);

  return (
    <LoadingWrap>
      <span>{NOUNS[PICK_AT_RANDOM]}...</span>
    </LoadingWrap>
  );
};

export default Loading;

const Pulse = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const LoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.6rem 0 5.6rem;

  span {
    padding: 0.8rem 1.6rem;
    animation: ${Pulse} 1.5s ease alternate infinite;
    border: 2px solid var(--black);
    color: var(--black);
    font-family: var(--font-sans);
    font-size: 2.4rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    line-height: 3.2rem;
    text-align: center;
    text-transform: uppercase;
  }
`;
