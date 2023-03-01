import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }
    
    body {
        background-color: #2CB3F3;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;