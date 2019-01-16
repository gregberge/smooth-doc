import React from 'react'
import { createGlobalStyle, th, Normalize } from '@smooth-ui/core-sc'
import '../style/editor.css'

const LocalGlobalStyle = createGlobalStyle`
  html, body {
    color: ${th('textColor')};
  }

  a, a:hover {
    color: ${th('primary')};
    text-decoration: none;
  }
`

export const GlobalStyle = () => (
  <>
    <Normalize />
    <LocalGlobalStyle />
  </>
)
