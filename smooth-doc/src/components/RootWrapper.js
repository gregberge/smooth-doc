import React from 'react'
import { ColorModeProvider } from '@xstyled/styled-components'
import { MDXProvider } from './MDX'
import { GlobalStyle, ThemeProvider } from './Theme'

export function RootWrapper({ children }) {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <GlobalStyle />
        <MDXProvider>{children}</MDXProvider>
      </ColorModeProvider>
    </ThemeProvider>
  )
}
