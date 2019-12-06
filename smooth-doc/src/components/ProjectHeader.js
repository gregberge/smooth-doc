import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled, {
  Box,
  css,
  useColorMode,
  th,
  up,
} from '@xstyled/styled-components'
import { Container } from './Container'
import { DocSearch } from './DocSearch'
import GithubBrands from './icons/GithubBrands'
import SunSolid from './icons/SunSolid'
import MoonSolid from './icons/MoonSolid'

const QUERY = graphql`
  query Header {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 34, height: 34) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    site {
      siteMetadata {
        title
        github
        algoliaDocSearch {
          enabled
          apiKey
          indexName
        }
        nav {
          title
          url
        }
      }
    }
  }
`

const OutsideContainer = styled.div`
  background-color: bg;
  border-bottom: 1;
  border-color: border;
  padding: 16 0;
`

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: text;
  height: 34;
  margin-right: 16;

  &:hover {
    color: text;
  }

  > div {
    flex-shrink: 0;
  }
`

const LogoText = styled.h2`
  display: block;
  font-size: 20;
  line-height: 0.9;
  margin: 0;
  margin-left: 10;
`

const Nav = styled.nav`
  height: 34;
  margin-left: 10;
  position: relative;
  mask-image: linear-gradient(
    to right,
    transparent,
    ${th.color('text')} 5%,
    ${th.color('text')} 95%,
    transparent
  );
  overflow-x: auto;

  ${up(
    'sm',
    css`
      mask-image: none;
    `,
  )}
`

const NavList = styled.ul`
  color: text;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 34;
`

const NavListItem = styled.li`
  list-style-type: none;
  flex: 1 1 auto;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  font-size: 16;
  line-height: 1.2;

  a,
  button {
    appearance: none;
    color: nav-link;
    display: flex;
    padding: 0 10;
    background-color: transparent;
    border: 0;
    transition: base;
    transition-property: color;
    cursor: pointer;

    &:hover,
    &:focus {
      outline: none;
      color: nav-link-hover;
    }
  }
`

const modeIcons = {
  light: MoonSolid,
  dark: SunSolid,
}

function getInverseMode(mode) {
  return mode === 'light' ? 'dark' : 'light'
}

function ColorModeSwitcher() {
  const [mode, setMode] = useColorMode()
  const Icon = modeIcons[mode]
  return (
    <button type="button" onClick={() => setMode(getInverseMode)}>
      <Icon width="24" height="24" />
    </button>
  )
}

export function ProjectHeader() {
  const data = useStaticQuery(QUERY)
  return (
    <OutsideContainer>
      <Container>
        <Header>
          <LogoLink to="/">
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt={data.site.siteMetadata.title}
            />
            <LogoText>{data.site.siteMetadata.title}</LogoText>
          </LogoLink>
          <Box ml="auto">
            {data.site.siteMetadata.algoliaDocSearch.enabled && (
              <DocSearch {...data.site.siteMetadata.algoliaDocSearch} />
            )}
          </Box>
          <Nav>
            <NavList>
              {data.site.siteMetadata.nav.map(({ title, url }) => (
                <NavListItem key={title}>
                  <Link to={url}>{title}</Link>
                </NavListItem>
              ))}
              <NavListItem>
                <a
                  href={data.site.siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubBrands width="24" height="24" />
                </a>
              </NavListItem>
              <NavListItem>
                <ColorModeSwitcher />
              </NavListItem>
            </NavList>
          </Nav>
        </Header>
      </Container>
    </OutsideContainer>
  )
}
