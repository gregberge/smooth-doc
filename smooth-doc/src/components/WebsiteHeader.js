import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { theme, ThemeProvider } from '@smooth-ui/core-sc'
import { Header } from 'smooth-code-landers'

const QUERY = graphql`
  query WebsiteHeader {
    site {
      siteMetadata {
        standalone
      }
    }
  }
`

export function WebsiteHeader() {
  return (
    <StaticQuery
      query={QUERY}
      render={data =>
        data.site.siteMetadata.standalone === false ? (
          <ThemeProvider theme={theme}>
            <Header variant="shadow" />
          </ThemeProvider>
        ) : null
      }
    />
  )
}
