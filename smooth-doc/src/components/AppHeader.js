import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, {
  Box,
  useColorMode,
  down,
  css,
} from '@xstyled/styled-components'
import { ScreenContainer } from './ScreenContainer'
import { DocSearch } from './DocSearch'
import { NavLink } from './Nav'
import { AppNav } from './AppNav'

const QUERY = graphql`
  query AppHeader {
    logos: allFile(filter: { name: { glob: "logo-nav*" } }) {
      nodes {
        name
        publicURL
      }
    }

    site {
      siteMetadata {
        title
        docSearch {
          apiKey
          indexName
        }
        navItems {
          title
          url
        }
      }
    }
  }
`

const OuterHeader = styled.header`
  background-color: background;
  border-bottom-style: solid;
  border-bottom-width: base;
  border-bottom-color: layout-border;
  padding: 2 0;
  height: 50;

  ${down(
    'sm',
    css`
      overflow-x: auto;
    `,
  )}
`

const NavSkipLink = styled.a`
  text-decoration: none;
  left: -999px;
  position: absolute;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -999;
  color: primary;

  &:focus {
    background-color: background;
    border-radius: base;
    left: auto;
    top: auto;
    height: auto;
    width: max-content;
    overflow: auto;
    padding: 2;
    margin: 2;
    text-align: center;
    z-index: 999;
  }
`

function useLogo(logos) {
  const [mode] = useColorMode()
  switch (mode) {
    case 'dark':
      return (
        logos.find((logo) => logo.name === 'logo-nav-dark') ||
        logos.find((logo) => logo.name === 'logo-nav') ||
        null
      )
    case 'light':
    default:
      return (
        logos.find((logo) => logo.name === 'logo-nav-light') ||
        logos.find((logo) => logo.name === 'logo-nav') ||
        null
      )
  }
}

export function AppHeader() {
  const data = useStaticQuery(QUERY)
  const logo = useLogo(data.logos.nodes)

  return (
    <OuterHeader>
      <ScreenContainer>
        <NavSkipLink tabindex="0" href="#main">
          Skip to content
        </NavSkipLink>
        <Box row alignItems="center" flexWrap="nowrap" mx={-2}>
          <Box col px={2} display="flex">
            <NavLink
              row
              display="inline-flex"
              alignItems="center"
              flexWrap="nowrap"
              mx={-2}
              to="/"
            >
              {logo ? (
                <Box
                  col="auto"
                  px={2}
                  height={32}
                  forwardedAs="img"
                  src={logo.publicURL}
                  alt={data.site.siteMetadata.title}
                />
              ) : (
                <Box
                  col="auto"
                  flex="0 1 auto"
                  px={2}
                  forwardedAs="h2"
                  alignItems="center"
                  fontSize={18}
                  m={0}
                >
                  {data.site.siteMetadata.title}
                </Box>
              )}
            </NavLink>
          </Box>
          {data.site.siteMetadata.docSearch ? (
            <Box col="auto" px={2} display={{ xs: 'none', md: 'block' }}>
              <DocSearch {...data.site.siteMetadata.docSearch} />
            </Box>
          ) : null}
          <AppNav col="auto" px={2} />
        </Box>
      </ScreenContainer>
    </OuterHeader>
  )
}
