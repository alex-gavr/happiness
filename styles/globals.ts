import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default margin */
    * {
        margin: 0;
        padding: 0;
        font: inherit;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul,
    ol {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */

    html,
    body {
        height: 100%;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.background};
    }

    body {
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.paragraph};
        cursor: inherit;
        display: block;
        width: 100%;
        height: 100%;
    }

    /* Make images easier to work with */
    img,
    picture,
    svg {
        max-width: 100%;
        display: block;
    }

    h1 {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.heading};
        color: ${({ theme }) => theme.colors.primary};
        z-index: 2;
        line-height: 1.4;
        letter-spacing: 0.06rem;
        text-transform: lowercase;
    }
    h1:first-letter {
        text-transform: uppercase;
    }
    h2 {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.subHeading};
        color: ${({ theme }) => theme.colors.title};
        letter-spacing: 0.09rem;
        text-transform: lowercase;
        z-index: 2;
    }
    h2:first-letter {
        text-transform: uppercase;
    }
    h3 {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.subHeading};
        color: ${({ theme }) => theme.colors.title};
    }
    p {
        
        font-size: ${({ theme }) => theme.fontSize.body};
        color: ${({ theme }) => theme.colors.paragraph};
        letter-spacing: 0.06rem;
        z-index: 2;
    }
    li {
        
        font-size: ${({ theme }) => theme.fontSize.body};
    }
    button {
        font-size: ${({ theme }) => theme.fontSize.body};
        letter-spacing: 0.06rem;
        z-index: 2;
    }

    header,
    main {
        width: 95%;
    }
    header{
        max-width: 1500px;
    }

    ::-webkit-scrollbar {
        display: none;
    }
    
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #888;
    }
`;

export default GlobalStyle;
