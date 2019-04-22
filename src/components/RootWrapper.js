import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { th, styled, up, css } from '@smooth-ui/core-sc'
import { ThemeProvider } from './ThemeProvider'
import { GlobalStyle } from './GlobalStyle'
import { Code } from './Code'

const Editor = styled.div`
  background-color: #f5f2f0;
  color: ${th('editorTextColor')};
  padding: 15px 20px;
  margin: 25px -20px;
  overflow: auto;
  font-size: 14px;
  line-height: 1.45;
  border-radius: 3px;
  border-radius: 0;
  overflow-y: auto;

  ${up(
    'sm',
    css`
      border-radius: 3px;
    `,
  )}
`

const components = {
  pre: ({
    children: {
      props: { className, children },
    },
  }) => {
    const lang = className && className.split('-')[1]
    return (
      <Editor>
        <Code lang={lang}>{children}</Code>
      </Editor>
    )
  },
}

export function RootWrapper({ children }) {
  return (
    <ThemeProvider>
      <MDXProvider components={components}>
        <>
          <GlobalStyle />
          {children}
        </>
      </MDXProvider>
    </ThemeProvider>
  )
}
