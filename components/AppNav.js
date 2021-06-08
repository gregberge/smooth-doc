import React from 'react'
import Link from 'next/link'
import { RiGithubFill, RiTwitterFill } from 'react-icons/ri'
import { Nav, NavList, NavListItem, NavLink, NavListText } from './Nav'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import siteMetadata from '../config/siteMetadata'

export function AppNav() {

  return (
    <Nav>
      <NavList>
        {(siteMetadata.navItems || []).map(
          ({ title, url }, index) => (
            <NavListText key={index} padding="0 36px" >
              <Link href={url} passHref >
                <NavLink >{title}</NavLink>
              </Link>
            </NavListText>
          ),
        )}
        {siteMetadata.githubRepositoryURL ? (
          <NavListItem>
            <NavLink
              as="a"
              href={siteMetadata.githubRepositoryURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill style={{ width: 24, height: 24 }} />
            </NavLink>
          </NavListItem>
        ) : null}
        {siteMetadata.twitterAccount ? (
          <NavListItem>
            <NavLink
              as="a"
              href={`https://twitter.com/${siteMetadata.twitterAccount}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterFill style={{ width: 24, height: 24 }} />
            </NavLink>
          </NavListItem>
        ) : null}
        <NavListItem>
          <NavLink as={ColorModeSwitcher} />
        </NavListItem>
      </NavList>
    </Nav>
  )
}
