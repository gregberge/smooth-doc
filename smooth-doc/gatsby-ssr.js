import React from 'react'
import { getColorModeInitScriptElement } from '@xstyled/styled-components'
import { RootWrapper } from './src/components/RootWrapper'

export const wrapRootElement = ({ element }, { theme }) => {
  return <RootWrapper theme={theme}>{element}</RootWrapper>
}

export const onRenderBody = (
  { setPreBodyComponents, setPostBodyComponents, setHeadComponents },
  { algoliaDocSearch },
) => {
  setPreBodyComponents([getColorModeInitScriptElement()])

  if (algoliaDocSearch) {
    setHeadComponents([
      <link
        key="plugin-docsearch-css"
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
      />,
    ])

    setPostBodyComponents([
      <script
        key="plugin-docsearch-js"
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
      />,
    ])
  }
}
