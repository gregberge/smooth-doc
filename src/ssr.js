import React from 'react'
import { RootWrapper } from './components/RootWrapper'

export function getGatsbySSR() {
  return {
    wrapRootElement: ({ element }) => <RootWrapper>{element}</RootWrapper>,
  }
}
