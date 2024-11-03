"use client";
import { createGlobalStyle } from "styled-components";

// Définir les polices comme une constante de chaînes de caractères pour résoudre l'erreur typescript
const Fonts = `
    @font-face {
        font-family: 'Geist Sans';
        src: url('/fonts/GeistMonoVF.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Geist Mono';
        src: url('/fonts/GeistVF.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'OPTIEdgar';
        src:  url('/fonts/OPTIEdgar-Extended.otf') format('otf');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;

// Appliquer les polices et styles globaux avec `createGlobalStyle`
const GlobalStyles = createGlobalStyle`
    ${Fonts}  // Insérer les polices définies plus haut

    :root {
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

        --font-geist-sans: 'Geist Sans', sans-serif;
        --font-geist-mono: 'Geist Mono', monospace;
        --font-edgar: 'OPTIEdgar', monospace;
    }

    ::selection {
        background-color: #F4C6A4;
        color: white;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body {
        font-family: var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1, h2, h3 {
        font-family: var(--font-geist-sans), 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    a {
        color: inherit;
        font-family: var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    nav a, footer a {
        text-decoration: none;
    }

    p, a {
        font-size: 1rem;
        font-weight: 300;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .activeNav {
        color: var(--primary-champagne) !important;
    }
`;

export default GlobalStyles;
