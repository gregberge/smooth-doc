import React from 'react'
import { transparentize } from 'polished'
import { styled, up, css, th } from '@smooth-ui/core-sc'
import { StaticQuery, graphql, Link } from 'gatsby'

const QUERY = graphql`
  query Sidebar {
    allSitePage {
      edges {
        node {
          id
          path
          context {
            frontmatter {
              title
              menu
              order
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        menu
      }
    }
  }
`

const createOrFindGroup = (name, groups) => {
  let group = groups.find(group => group.name === name)
  if (!group) {
    group = { name, pages: [] }
    groups.push(group)
  }
  return group
}

const sortByOrder = (a, b) => {
  const diff =
    (a.context.frontmatter.order || 0) - (b.context.frontmatter.order || 0)
  return diff === 0 ? 0 : diff > 0 ? 1 : -1
}

const pagesToNavGroups = pages =>
  pages.reduce((groups, page) => {
    if (!page.context.frontmatter.menu) {
      return groups
    }
    const group = createOrFindGroup(page.context.frontmatter.menu, groups)
    group.pages.push(page)
    group.pages.sort(sortByOrder)
    return groups
  }, [])

const Nav = styled.nav`
  padding: 0 20px;
  width: 200px;

  ${up(
    'sm',
    css`
      padding-left: 40px;
      width: auto;
    `,
  )}
`

const NavGroup = styled.div`
  margin-bottom: 20px;
`

const NavGroupTitle = styled.h3`
  font-size: 17px;
  line-height: 20px;
  font-weight: 500;
`

const NavGroupMenu = styled.ul`
  margin: 0;
  padding: 0;
`

const NavGroupMenuItem = styled.li`
  list-style-type: none;
  margin: 2px 0;
  padding: 0;

  a {
    color: ${th('textColor')};
    display: block;
    transition: color 300ms;
    padding-left: 10px;
    border-left: 3px solid;
    border-color: transparent;

    &:hover {
      color: ${th('textColor', color => transparentize(0.3, color))};
    }

    &.active {
      font-weight: 600;
      border-left: 3px solid ${th('primary')};
    }
  }
`

const sortGroupsWithConfig = menu => (a, b) => {
  const indexA = menu.indexOf(a.name)
  const indexB = menu.indexOf(b.name)
  const diff = indexA - indexB
  return diff === 0 ? 0 : diff < 0 ? -1 : 1
}

export const Sidebar = () => (
  <StaticQuery
    query={QUERY}
    render={data => {
      const navGroups = pagesToNavGroups(
        data.allSitePage.edges
          .map(edge => edge.node)
          .filter(node => node.context && node.context.frontmatter),
      )

      navGroups.sort(sortGroupsWithConfig(data.site.siteMetadata.menu))

      return (
        <Nav>
          {navGroups.map(navGroup => (
            <NavGroup key={navGroup.name}>
              <NavGroupTitle>{navGroup.name}</NavGroupTitle>
              <NavGroupMenu>
                {navGroup.pages.map(page => (
                  <NavGroupMenuItem key={page.id}>
                    <Link activeClassName="active" to={page.path}>
                      {page.context.frontmatter.title}
                    </Link>
                  </NavGroupMenuItem>
                ))}
              </NavGroupMenu>
            </NavGroup>
          ))}
        </Nav>
      )
    }}
  />
)
