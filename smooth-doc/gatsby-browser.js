import React from 'react'
import { RootWrapper } from './src/components/RootWrapper'

export function wrapRootElement({ element }, { theme }) {
  return <RootWrapper theme={theme}>{element}</RootWrapper>
}
