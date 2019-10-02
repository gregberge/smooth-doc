import React from 'react'
import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

const Input = styled.input`
  background-color: secondary-bg;
  border-radius: 4;
  border: 1;
  border-color: border;
  line-height: 1.4;
  padding: 5 10;
  color: text;
  transition: base;
  transition-property: box-shadow;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 1px ${th.color('primary')};
  }
`

export function DocSearch({ apiKey, indexName }) {
  React.useEffect(() => {
    window.docsearch({
      apiKey,
      indexName,
      inputSelector: '#algolia-docsearch-input',
    })
  }, [apiKey, indexName])

  return <Input id="algolia-docsearch-input" placeholder="Search..." />
}
