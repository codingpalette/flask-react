import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body{
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  
  html, body, #root {
    height: 100%;
  }

  * {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
