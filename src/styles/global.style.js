import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
    }

    *{
        -webkit-overflow-scrolling: touch;
    }


    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: 'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.414;
        font-weight: 400;
        font-size: 14px;
        color: ${({ theme: { colors } }) => colors.textColor1};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-size-adjust: auto;
    }

    .g-btn-transparent{
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus{
            outline: none;
            box-shadow: none;
        }
    }

    a{
        color: inherit;
        text-decoration: none;
        &:hover{
            color: inherit;
        }
    }

`;

export default GlobalStyle;
