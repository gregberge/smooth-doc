import React from 'react'
import { createGlobalStyle, th, Normalize } from '@smooth-ui/core-sc'

const LocalGlobalStyle = createGlobalStyle`
  html, body {
    color: ${th('textColor')};
  }

  a, a:hover {
    color: ${th('primary')};
    text-decoration: none;
  }
`

export function GlobalStyle() {
  return (
    <>
      <Normalize />
      <LocalGlobalStyle />
    </>
  )
}
