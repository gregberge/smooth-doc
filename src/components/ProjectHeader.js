import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Grid, styled, th, up } from '@smooth-ui/core-sc'
import { transparentize } from 'polished'
import Bars from './icons/Bars'
import Close from './icons/Close'
import GitHub from './icons/GitHub'
import { MenuConsumer } from './MenuContext'

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
        nav {
          title
          url
        }
      }
    }
  }
`

const Container = styled.div`
  background-color: ${th('white')};
  border-bottom: 1px solid ${th('gray200')};
  padding: 16px 0;
`

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
`

const LogoLink = styled(Link)`
  align-items: center;
  color: ${th('textColor')};
  display: flex;
  flex-flow: row nowrap;
  height: 34px;

  &:hover {
    color: ${th('textColor')};
  }
`

const LogoText = styled.h2`
  display: block;
  font-size: 1.25em;
  line-height: 18px;
  margin: 0;
  margin-left: 10px;
`

const Nav = styled.nav`
  height: 34px;
  margin-left: auto;
  position: relative;
`

const NavList = styled.ul`
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 34px;
`

const NavListItem = styled.li`
  list-style-type: none;
  flex: 1 1 auto;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  font-size: 1em;
  line-height: 1.2em;

  a {
    color: ${th('textColor', color => transparentize(0.2, color))};
    display: flex;
    padding: 0 10px;
    transition: color 300ms;

    &:hover {
      color: ${th('textColor')};
    }
  }
`

const MenuButton = styled.button`
  color: ${th('textColor', color => transparentize(0.2, color))};
  border: 0;
  background: transparent;
  transition: color 300ms;
  display: flex;
  align-items: center;
  position: absolute;
  right: -15px;
  bottom: -50px;

  &:focus {
    outline: none;
    color: ${th('textColor')};
  }

  ${up('sm', 'display: none;')}
`

export const ProjectHeader = () => (
  <StaticQuery
    query={QUERY}
    render={data => (
      <Container>
        <Grid gutter={20}>
          <Header>
            <LogoLink to="/">
              <Img
                fixed={data.logo.childImageSharp.fixed}
                alt={data.site.siteMetadata.title}
              />
              <LogoText>{data.site.siteMetadata.title}</LogoText>
            </LogoLink>
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
                    <GitHub width="24" height="24" />
                  </a>
                </NavListItem>
              </NavList>
            </Nav>
            <MenuConsumer>
              {props =>
                props ? (
                  <MenuButton onClick={() => props.toggle()}>
                    {props.toggled ? (
                      <Close width="20" height="20" />
                    ) : (
                      <Bars width="20" height="20" />
                    )}
                  </MenuButton>
                ) : null
              }
            </MenuConsumer>
          </Header>
        </Grid>
      </Container>
    )}
  />
)
