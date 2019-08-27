import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const detailsQuery = graphql`
  query DefaultSEOQuery {
    socialImage: file(relativePath: { eq: "social.jpg" }) {
      childImageSharp {
        fixed(width: 1280, height: 640) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    site {
      siteMetadata {
        title
        description
        siteUrl
        author
      }
    }
  }
`

export default function SEO({ title }) {
  const data = useStaticQuery(detailsQuery)
  const metaDescription = data.site.siteMetadata.description
  const metaTitle = title || data.site.siteMetadata.title
  const url = data.site.siteMetadata.siteUrl
  const image = url + data.socialImage.childImageSharp.fixed.src
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image:src',
          content: image,
        },
        {
          name: 'twitter:creator',
          content: data.site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  )
}
