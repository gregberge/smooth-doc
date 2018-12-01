import { globalStyle, createGlobalStyle, th } from '@smooth-ui/core-sc'
import theme from '../style/theme'
import '../style/editor.css'

export const GlobalStyle = createGlobalStyle`
  ${globalStyle(theme)};

  html, body {
    color: ${th('textColor')};
  }

  a, a:hover {
    color: ${th('primary')};
    text-decoration: none;
  }
`
