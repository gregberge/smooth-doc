import {
  createGlobalStyle,
  ThemeProvider,
  Preflight,
  ColorModeProvider,
  th,
} from '@xstyled/styled-components'

import { theme } from '../config/theme'

const GlobalStyle = createGlobalStyle`
  ${th('global')}
`

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <GlobalStyle />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}