"use client"
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyles;
