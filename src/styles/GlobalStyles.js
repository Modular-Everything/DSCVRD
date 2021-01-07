import { createGlobalStyle } from 'styled-components';

//

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --coal: #414141;
    --yellow: #ffef00;
    --grey: #efefef;

    --fade-from-bottom: linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, rgba(14, 14, 14, 0.75) 75%);

    --highlight: var(--yellow);
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
