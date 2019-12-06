import { createGlobalStyle } from '@xstyled/styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: base;
    color: text;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
  }

  a, a:hover {
    color: primary;
    text-decoration: none;
  }
`
