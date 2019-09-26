import React from 'react'
import { getColorModeInitScriptElement } from '@xstyled/styled-components'
import { RootWrapper } from './src/components/RootWrapper'

export const wrapRootElement = ({ element }, { theme }) => {
  return <RootWrapper theme={theme}>{element}</RootWrapper>
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([getColorModeInitScriptElement()])
}
