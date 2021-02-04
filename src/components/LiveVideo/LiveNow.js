import React from 'react';
import styled, { keyframes } from 'styled-components';

//

const LiveNow = () => (
  <LiveNowWrap>
    <span>Live Now</span>
  </LiveNowWrap>
);

export default LiveNow;

const Pulse = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const LiveNowWrap = styled.div`
  margin-bottom: 3.2rem;

  span {
    display: flex;
    align-items: center;
    padding: 0.8rem 1.6rem;
    background-color: var(--red);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.4rem;
    text-align: center;
    text-transform: uppercase;

    &::before {
      content: '';
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 1.2rem;
      animation: ${Pulse} 1.5s ease alternate infinite;
      border-radius: 100%;
      background-color: var(--white);
    }
  }
`;
