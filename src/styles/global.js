import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import RubikLatin300 from 'typeface-rubik/files/rubik-latin-300.woff';
import RubikLatin300_2 from 'typeface-rubik/files/rubik-latin-300.woff';
import RubikLatin400 from 'typeface-rubik/files/rubik-latin-400.woff';
import RubikLatin400_2 from 'typeface-rubik/files/rubik-latin-400.woff';
import RubikLatin500 from 'typeface-rubik/files/rubik-latin-500.woff';
import RubikLatin500_2 from 'typeface-rubik/files/rubik-latin-500.woff';

export default createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: Rubik;
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: url('${RubikLatin300_2}') format('woff2'), url('${RubikLatin300}') format('woff');
  }
  @font-face {
    font-family: Rubik;
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url('${RubikLatin400_2}') format('woff2'), url('${RubikLatin400}') format('woff');
  }
  @font-face {
    font-family: Rubik;
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: url('${RubikLatin500_2}') format('woff2'), url('${RubikLatin500}') format('woff');
  }
  body {
    font-family: Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    padding: 0;
    background-color: white;
    line-height: 1.4;
  }
  html {
    box-sizing: border-box;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5em;
    &:last-child {
      margin-bottom: 0;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
