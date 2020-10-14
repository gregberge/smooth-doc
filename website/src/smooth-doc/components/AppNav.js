import React from 'react'
import { RiTwitterFill } from 'react-icons/ri'
import {
  Nav,
  NavList,
  NavListItem,
  NavLink,
  ColorModeSwitcher,
} from 'smooth-doc/components'

export function AppNav() {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink to="/docs/">Docs</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            forwardedAs="a"
            href="https://twitter.com/neoziro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterFill style={{ width: 24, height: 24 }} />
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink forwardedAs={ColorModeSwitcher} />
        </NavListItem>
      </NavList>
    </Nav>
  )
}
