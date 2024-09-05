"use client"
// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Autres styles globaux */
`;

export default GlobalStyles;
