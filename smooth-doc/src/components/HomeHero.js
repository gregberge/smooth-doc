import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { styled } from '@smooth-ui/core-sc'

const QUERY = graphql`
  query HomeHero {
    logo: file(relativePath: { eq: "home-logo.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`

const Container = styled.div`
  padding-top: 30px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
`

export function HomeHero({ title }) {
  return (
    <StaticQuery
      query={QUERY}
      render={data => (
        <Container>
          <Img
            fixed={data.logo.childImageSharp.fixed}
            alt={data.site.siteMetadata.title}
            style={{ margin: '0 auto' }}
          />
          <Title>{title}</Title>
        </Container>
      )}
    />
  )
}
