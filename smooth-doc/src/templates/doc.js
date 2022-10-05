import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query DocPageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        pageType
        title
        editLink
      }
      tableOfContents
    }
  }
`

function DocTemplate({ children }) {
  return children
}

export default DocTemplate
