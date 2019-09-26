import React from 'react'
import { getColorModeInitScriptElement } from '@xstyled/styled-components'
import { RootWrapper } from './src/components/RootWrapper'

export function wrapRootElement({ element }, { theme }) {
  return <RootWrapper theme={theme}>{element}</RootWrapper>
}

export function onRenderBody({ setPreBodyComponents }) {
  setPreBodyComponents([getColorModeInitScriptElement()])
}
