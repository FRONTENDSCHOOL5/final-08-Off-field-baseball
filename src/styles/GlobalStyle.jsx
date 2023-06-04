import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './global.css';
import './fonts.css';

const GlobalStyle = createGlobalStyle`

  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    color: inherit;
    /* background-color */
    /* font-family */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea {
    /* font-family: 'Spoqa Han Sans Neo', sans-serif; */
    padding: 0;
    border: none;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: inherit;
  }

  button {
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
