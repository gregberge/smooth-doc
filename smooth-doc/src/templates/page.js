import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query PageTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        pageType
        title
      }
    }
  }
`

function PageTemplate({ children }) {
  return children
}

export default PageTemplate
