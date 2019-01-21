import React from 'react'
import { RootWrapper } from './components/RootWrapper'

export function getGatsbyBrowser() {
  return {
    wrapRootElement: ({ element }) => <RootWrapper>{element}</RootWrapper>,
  }
}
