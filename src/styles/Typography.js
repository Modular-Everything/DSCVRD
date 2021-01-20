import { createGlobalStyle } from 'styled-components';

//

const Typography = createGlobalStyle`
  :root {
    --font-sans: 'Helvetica Neue', Helvetica, -apple-system, Arial, sans-serif, "Apple Color Emoji";
    --font-serif: Didot, serif;
    --font-serif-copy: Georgia, serif;
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

  .font__smaller-headline-text {
    font-family: var(--font-serif);
    font-size: 2.8rem;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.01em;
    line-height: 3.2rem;
    text-transform: uppercase;

    @media (min-width: 1024px) {
      font-size: 4.8rem;
      line-height: 5rem;
    }
  }

  .font__article-card-headline {
    font-family: var(--font-sans);
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    line-height: 2.4rem;
    text-transform: uppercase;

    @media (min-width: 1024px) {
      font-size: 2.2rem;
      line-height: 2.8rem;
    }
  }

  .font__article-card-copy {
    font-family: var(--font-serif-copy);
    font-size: 1.4rem;
    letter-spacing: 0.01em;
    line-height: 2rem;

    @media (min-width: 666px) {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }

  .font__header-two {
    font-family: var(--font-serif);
    font-size: 4.2rem;
    font-weight: 400;
    line-height: 4.6rem;
    text-align: center;
  }

  .font__header-three {
    font-family: var(--font-serif);
    font-size: 1.8rem;
    font-style: italic;
    line-height: 2.8rem;
    text-align: center;
  }

  .font__copy {
    font-family: var(--font-serif-copy);
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

export default Typography;
