import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

const QUERY = graphql`
  query Head {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export function Head({ pageContext }) {
  return (
    <StaticQuery
      query={QUERY}
      render={data => (
        <Helmet>
          <title>
            {pageContext.frontmatter.title} - {data.site.siteMetadata.title}
          </title>
        </Helmet>
      )}
    />
  )
}
