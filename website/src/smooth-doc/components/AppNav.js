import React from 'react'
import {
  Nav,
  NavList,
  NavListItem,
  NavLink,
  ColorModeSwitcher,
  Button,
} from 'smooth-doc/components'

export function AppNav() {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <Button
            py="4px"
            px="12px"
            forwardedAs="a"
            href="https://gum.co/smooth-doc"
            data-gumroad-single-product="true"
          >
            Buy Smooth DOC
          </Button>
        </NavListItem>
        <NavListItem>
          <NavLink to="/docs/">Docs</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink forwardedAs={ColorModeSwitcher} />
        </NavListItem>
      </NavList>
    </Nav>
  )
}
