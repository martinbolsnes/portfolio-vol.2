import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
:root {
    --font-body: Montserrat, Helvetica Neue, sans-serif;
    --font-headings: Inter, sans-serif;
    --font-logo: Righteous, cursive;
  
    --font-size-base: 16px;
    --font-size-xxs: 0.296rem;
    --font-size-xs: 0.444rem;
    --font-size-sm: 0.667rem;
    --font-size: 1rem;
    --font-size-md: 1.5rem;
    --font-size-lg: 2.25rem;
    --font-size-xl: 3.375rem;
    --font-size-xxl: 5.063rem;

    /* FONT-WEIGHT */

    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;
    --font-weight-black: 900;
  
    /* SPACING */
  
    --size-3xs: 2px;
    --size-xxs: 4px;
    --size-xs: 7px;
    --size-sm: 10px;
    --size: 16px;
    --size-md: 24px;
    --size-lg: 36px;
    --size-xl: 54px;
    --size-xxl: 81px;
  
    /* COLORS */
  
    --color-primary: #266867;
    --color-secondary: #f58800;
    --color-tertiary: #1a4645;
    --color-quaternary: #f8bc24;
    --color-white: #fcffff;
    --color-black: #051821;
  
    --c-action: var (var(--color-secondary));
    --c-danger: rgb(190, 47, 47);
    --c-info: rgb(141, 194, 232);
    --c-text: var(var(--color-black));
    --c-success: var(var(--color-primary));
    --c-disabled: var(var(--color-tertiary));
  
    /* RADUIS */
  
    --raduis-base: 6px;
    --raduis-sm: 4px;
    --raduis-md: 8px;
    --raduis-xl: 10px;
  
    /* ANIMATION SPEED */
  
    --speed-base: 300ms;
    --speed-fast: 120ms;
    --speed-meduim: 200ms;
    --speed-slow: 500ms;
  
    --animate-duration: var(var(--speed-base));
    --animate-delay: var(var(--speed-fast));
  
    /* Z-INDEX */
  
    --z-base: 300;
    --z-ground: 400;
    --z-cieling: 1000;
    --z-sky: 9999;
  
    /* ELEVATION */
  
    --shadow-base: 0 2px 2px 0 rgb(0 0 0 / 14%);
    --shadow-1: 0 3px 4px 0 rgb(0 0 0 / 14%);
    --shadow-2: 0 5px 6px 0 rgb(0 0 0 / 14%);
    --shadow-3: 0 8px 10px 0 rgb(0 0 0 / 14%);

    
  
  }
  
  html {
    background: var(--color-white);
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    scroll-behavior: smooth;
  }
  
  html,
  body {
    height: 100%;
    overflow-x: hidden;
  }
  
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  
  a {
    color: var(--c-action);
  }

  h1, h2, h3, h4{
      font-family: var(--font-headings);
  }

  p{
      font-family: var(--font-body);
      font-weight: var(--font-weight-regular);
  }
`;

export default GlobalStyle;
