import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${normalize}
  body {
    @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500&display=swap');
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
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
