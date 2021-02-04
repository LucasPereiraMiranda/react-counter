import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    font-family:sans-serif;
    padding:0;
    border:0;
    padding:0;
  }

  body{
    background-color:#fffaaa;
    box-sizing:border-box;
    min-height:100vh;
    max-width:100%;
    font-size: 3rem;
    margin:0;
  }
`;
