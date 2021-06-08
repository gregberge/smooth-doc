import React from 'react'
import { SEO } from './SEO'
import siteMetadata from '../config/siteMetadata'

export function Head({ title }) {
  
  return (
    <SEO
      title={
        title
          ? `${title} - ${siteMetadata.title}`
          : siteMetadata.title
      }
    />
  )
}
