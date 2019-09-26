import React from 'react'
import { getColorModeInitScriptElement } from '@xstyled/styled-components'
import { RootWrapper } from './src/components/RootWrapper'

export const wrapRootElement = ({ element }) => (
  <RootWrapper>{element}</RootWrapper>
)

export function onRenderBody({ setPreBodyComponents }) {
  setPreBodyComponents([getColorModeInitScriptElement()])
}
