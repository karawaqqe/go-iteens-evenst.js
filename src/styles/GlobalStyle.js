import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #e9eef5;
    margin: 0;
    padding: 0;
  }

  h1, h3 {
    margin: 0;
  }
`;
