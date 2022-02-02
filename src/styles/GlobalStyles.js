import { createGlobalStyle } from 'styled-components';

//

console.info(
  '%c\n\nWebsite built with 🩸, 😅 and 😭 by\nChrish Dunne (https://www.modular-everything.com/)\n\n',
  'color: green'
);

//

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fafafa;
    --black: #0e0e0e;
    --coal: #414141;
    --foil: #c9c9c9;
    --yellow: #ffef00;
    --red: #ff1100;
    --grey: #efefef;

    --fade-out: linear-gradient(180deg, rgba(14, 14, 14, 0.4) 0, rgba(14, 14, 14, 1) 100%);
    --fade-from-bottom: linear-gradient(180deg, rgba(14, 14, 14, 0) 0, rgba(14, 14, 14, 0.85) 90%);
    --fade-from-top: linear-gradient(0, rgba(14, 14, 14, 0) 0, rgba(14, 14, 14, 0.35) 90%);
    --fade-from-left: linear-gradient(270deg, rgba(14, 14, 14, 0) 0, rgba(14, 14, 14, 1) 100%);

    --highlight: var(--yellow);

    --sal-duration: 750ms;
  }

  ::selection {
    background-color: var(--highlight);
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: var(--white);
    font-size: 2rem;
  }

  .headroom {
    will-change: transform;
    transition: transform 200ms linear;
  }

  .headroom--pinned {
    transform: translateY(0%);
  }

  .headroom--unpinned {
    transform: translateY(-100%);
  }
`;

export default GlobalStyles;
