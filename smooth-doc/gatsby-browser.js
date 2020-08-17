import React from 'react'
import { RootWrapper } from './src/components/RootWrapper'

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}
