import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@xstyled/styled-components'

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
  padding-top: 30;
  text-align: center;
`

const Title = styled.h1`
  font-size: 28;
  font-weight: 600;
`

const ImgContainer = styled.div`
  display: inline-block;
  margin: 0 auto;
  line-height: 0;
  &[data-plain-bg='true'] {
    background-color: home-hero-img-bg;
  }
`

export function HomeHero({ title, plainBg }) {
  return (
    <StaticQuery
      query={QUERY}
      render={data => (
        <Container>
          <ImgContainer data-plain-bg={plainBg}>
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt={data.site.siteMetadata.title}
            />
          </ImgContainer>
          <Title>{title}</Title>
        </Container>
      )}
    />
  )
}
