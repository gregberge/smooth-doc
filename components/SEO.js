import React from 'react'
import Helmet from 'react-helmet'
import siteMetadata from '../config/siteMetadata'


export function SEO({ title }) {
  const metaDescription = siteMetadata.description
  const metaTitle = title || siteMetadata.title
  const url = siteMetadata.siteUrl
  const socialImage = siteMetadata.socialImage
  const author = siteMetadata.author
  
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
          content: socialImage,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image:src',
          content: socialImage,
        },
        {
          name: 'twitter:creator',
          content: author,
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
