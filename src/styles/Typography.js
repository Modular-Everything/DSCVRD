import { createGlobalStyle } from 'styled-components';

//

const Typography = createGlobalStyle`
  :root {
    --font-sans: 'Helvetica Neue', Helvetica, -apple-system, Arial, sans-serif, "Apple Color Emoji";
    --font-serif: Didot, serif;
  }

  html {
    color: var(--black);
    font-family: var(--font-sans);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 0;
  }

  mark, .mark {
    display: inline;
    margin: 0;
    padding: 0;
    background: var(--highlight);
    line-height: 1;
  }

  /* Reusable Font Styles */

  .font__spacey-subtitle {
    font-family: var(--font-sans);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.25em;
    line-height: 2.4rem;
    text-transform: uppercase;

    @media screen and (min-width: 500px) {
      font-size: 1.8rem;
      line-height: 3rem;
    }

    @media screen and (min-width: 900px) {
      font-size: 2rem;
      line-height: 3.2rem;
    }
  }

  .font__big-headline-text {
    font-family: var(--font-serif);
    font-size: 4.8rem;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.01em;
    line-height: 5rem;
    text-transform: uppercase;

    @media screen and (min-width: 500px) {
      font-size: 5.2rem;
      line-height: 6rem;
    }

    @media screen and (min-width: 666px) {
      font-size: 6.4rem;
      line-height: 7rem;
    }

    @media screen and (min-width: 900px) {
      font-size: 8.4rem;
      line-height: 9.2rem;
    }
  }
`;

export default Typography;
