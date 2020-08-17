import React from 'react'
import { getColorModeInitScriptElement } from '@xstyled/styled-components'
import { RootWrapper } from './src/components/RootWrapper'

export const wrapPageElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}

export const onRenderBody = (
  { setHeadComponents, setPreBodyComponents, setPostBodyComponents },
  { docSearch },
) => {
  setPreBodyComponents([getColorModeInitScriptElement()])

  if (docSearch) {
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
