import React from 'react'
import { createGlobalStyle } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Normalize } from '@smooth-ui/core-sc'

const LocalGlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    color: ${th.color('text')};
    line-height: 1.4;
  }

  a, a:hover {
    color: ${th.color('primary')};
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
