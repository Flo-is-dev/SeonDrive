"use client"
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
         /* Variables de couleurs */
        --primary-champagne: #F4C6A4;
        --primary-gray: #282828;
        --primary-green: #425A4D;
        --secondary-green: #2E3B34;
        --background-champagne-dark: #ECE6E4;
        --background-champagne-light: #FFF7F4;
        --background-gray-dark: #121212;
        --background-gray-light: #202020;
        --text-color: #010101;
        --text-color-gray: #CECECE;

         /* Variables de polices */
        --font-geist-sans: 'Geist Sans', sans-serif;
        --font-geist-mono: 'Geist Mono', monospace;
        --font-Edgar: 'OPTIEdgar', monospace;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  h1 , h2 {
    font-family: var(--font-Edgar), monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p,a {
    font-size: 1rem;
    font-weight:300;
  }

  .activeNav {
    color:var(--primary-champagne) !important;
  }

`;

export default GlobalStyles;
