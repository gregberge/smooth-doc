import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ColorModeProvider } from '@xstyled/styled-components'
import { ThemeProvider } from './ThemeProvider'
import { GlobalStyle } from './GlobalStyle'
import { Code } from './Code'

const components = {
  code: ({ children, className, ...props }) => {
    const lang = className && className.split('-')[1]
    return (
      <Code lang={lang} {...props}>
        {children}
      </Code>
    )
  },
}

export function RootWrapper({ children, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <GlobalStyle />
        <MDXProvider components={components}>{children}</MDXProvider>
      </ColorModeProvider>
    </ThemeProvider>
  )
}
