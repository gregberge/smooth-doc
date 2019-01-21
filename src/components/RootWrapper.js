import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { th, styled, down, css } from '@smooth-ui/core-sc'
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

  ${down(
    'sm',
    css`
      margin-left: -20px;
      margin-right: -20px;
      border-radius: 0;
    `,
  )}
`

const components = {
  pre: ({ children: { props } }) => {
    // props is for MDXTag, props.props is for code element
    const lang = props.props.className && props.props.className.split('-')[1]
    return (
      <Editor>
        <Code lang={lang} {...props} />
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
