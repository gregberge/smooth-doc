import React from 'react'
import { Box, createGlobalStyle, th } from '@xstyled/styled-components'
import { RiSearchEyeLine } from 'react-icons/ri'
import { Input, InputGroup, InputGroupIcon } from './Input'

const DocSearchStyle = createGlobalStyle`
  .algolia-autocomplete .algolia-docsearch-suggestion--highlight {
    color: doc-search-suggestion-highlight-on-background;
    background-color: doc-search-suggestion-highlight-background;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--text .algolia-docsearch-suggestion--highlight {
    box-shadow: inset 0 -2px 0 0 ${th.color(
      'doc-search-suggestion-content-underline',
    )};
  }

  .algolia-autocomplete .ds-cursor .algolia-docsearch-suggestion--content {
    background-color: doc-search-suggestion-content-background !important;
  }

  .algolia-autocomplete .ds-dropdown-menu [class^=ds-dataset-] {
    background-color: background;
    border-color: layout-border;
  }

  .algolia-autocomplete .ds-dropdown-menu:before {
    background-color: background;
    border-color: layout-border;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion {
    background-color: background;
    color: on-background;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--category-header {
    border-color: layout-border;
    color: on-background-light;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--title {
    color: on-background;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column {
    color: on-background-light;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--text {
    color: on-background-light;
  }
`

export function DocSearch({ apiKey, indexName }) {
  React.useEffect(() => {
    window.docsearch({
      apiKey,
      indexName,
      inputSelector: '#algolia-docsearch-input',
      debug: true,
    })
  }, [apiKey, indexName])

  return (
    <>
      <DocSearchStyle />
      <Box>
        <InputGroup>
          <InputGroupIcon>
            <RiSearchEyeLine />
          </InputGroupIcon>
          <Input
            id="algolia-docsearch-input"
            type="search"
            placeholder="Search..."
          />
        </InputGroup>
      </Box>
    </>
  )
}
