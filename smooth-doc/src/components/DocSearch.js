import React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { th, down } from '@xstyled/system'
import SearchSolid from './icons/SearchSolid'
import { AlgoliaStyle } from './AlgoliaStyle'

const Container = styled.div`
  position: relative;

  svg {
    color: border;
    transition: base;
    transition-property: color;
  }

  &:focus-within {
    svg {
      color: text;
    }
  }

  ${down(
    'md',
    css`
      width: 30;
      z-index: 2;

      svg {
        color: text;
      }
    `,
  )}
`

const Input = styled.input`
  background-color: secondary-bg;
  border-radius: 4;
  border: 1;
  border-color: border;
  line-height: 1.4;
  padding: 5 10 5 30;
  color: text;
  transition: base;
  transition-property: all;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 1px ${th.color('primary')};
  }

  ${down(
    'md',
    css`
      width: 30;
      padding-left: 10;
      background-color: transparent;
      border-color: transparent;

      &:focus {
        width: ${p => p['data-width']}px;
        padding-left: 30;
        background-color: secondary-bg;
        border-color: border;
      }
    `,
  )}
`

const SearchIcon = styled(SearchSolid)`
  position: absolute;
  left: 8px;
  top: 8px;
  z-index: 1;
  user-select: none;
  pointer-events: none;
`

export function DocSearch({ apiKey, indexName }) {
  const ref = React.useRef()
  const [width, setWidth] = React.useState()
  React.useEffect(() => {
    const rect = ref.current.getBoundingClientRect()
    setWidth(window.innerWidth - rect.x - 20)
  }, [])

  React.useEffect(() => {
    window.docsearch({
      apiKey,
      indexName,
      inputSelector: '#algolia-docsearch-input',
    })
  }, [apiKey, indexName])

  return (
    <Container ref={ref}>
      <AlgoliaStyle />
      <SearchIcon />
      <Input
        type="search"
        id="algolia-docsearch-input"
        placeholder="Search..."
        data-width={width}
      />
    </Container>
  )
}
