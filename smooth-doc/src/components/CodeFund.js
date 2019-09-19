import React, { useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'

function useScript(src) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [src])
}

const QUERY = graphql`
  query CodeFund {
    site {
      siteMetadata {
        codeFundProperty
      }
    }
  }
`

function InnerCodeFund({ property }) {
  useScript(
    `https://codefund.io/properties/${property}/funder.js?template=square&theme=light`,
  )
  return <div id="codefund" />
}

export function CodeFund() {
  return (
    <StaticQuery
      query={QUERY}
      render={data => (
        <InnerCodeFund property={data.site.siteMetadata.codeFundProperty} />
      )}
    />
  )
}
