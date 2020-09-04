import { graphql } from 'gatsby'
import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { DocLayout } from '../components/DocLayout'

export const pageQuery = graphql`
  query DocPageQuery($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
        editLink
      }
      body
      tableOfContents
    }
  }
`

export default function Page({ data: { mdx } }) {
  return (
    <DocLayout
      title={mdx.fields.title}
      tableOfContents={mdx.tableOfContents}
      editLink={mdx.fields.editLink}
    >
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </DocLayout>
  )
}
