import React from 'react'
import { RootWrapper } from './src/components/RootWrapper'

export const wrapRootElement = ({ element }, { theme }) => {
  return <RootWrapper theme={theme}>{element}</RootWrapper>
}
