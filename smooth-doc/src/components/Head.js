import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Seo from './Seo'

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
      render={(data) => (
        <Seo
          title={
            pageContext && pageContext.frontmatter
              ? `${pageContext.frontmatter.title} - ${data.site.siteMetadata.title}`
              : data.site.siteMetadata.title
          }
        />
      )}
    />
  )
}
