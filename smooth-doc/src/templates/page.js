import { graphql } from 'gatsby'
import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { PageLayout } from '../components/PageLayout'

export const pageQuery = graphql`
  query PagePageQuery($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
      }
      body
    }
  }
`

export default function Page({ data: { mdx } }) {
  return (
    <PageLayout title={mdx.fields.title}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </PageLayout>
  )
}
