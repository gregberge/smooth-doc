import React from 'react'
import { getColorModeInitScriptElement } from '@xstyled/styled-components'
import { RootWrapper } from './src/components/RootWrapper'
import { PageWrapper } from './src/components/PageWrapper'

export const wrapPageElement = ({ element, props }) => {
  return (
    <RootWrapper>
      <PageWrapper props={props}>{element}</PageWrapper>
    </RootWrapper>
  )
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
