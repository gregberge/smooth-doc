import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from '@xstyled/styled-components'
// eslint-disable-next-line import/no-unresolved
import { trim } from '../utils/strUtils'

const Nav = styled.nav`
  padding: 4 3 5;
`

const NavGroup = styled.div`
  margin-bottom: 4;
`

const NavGroupTitle = styled.h4`
  font-size: 14;
  font-weight: 500;
  color: on-background-light;
  text-transform: uppercase;
  margin: 0 0 3 0;
`

const NavGroupMenu = styled.ul`
  margin: 0;
  padding: 0;
  border-left: 1;
  border-left-color: layout-border;
`

const NavGroupMenuItem = styled.li`
  list-style-type: none;
  margin: 2 0 0 -2px;
  padding: 0;
  font-size: 14;
  font-weight: 500;

  a {
    color: on-background-light;
    display: block;
    transition: fast;
    transition-property: color, border-color;
    padding: 2px 0 2px 2;
    border-left: 3;
    border-color: transparent;
    text-decoration: none;
    opacity: 0.85;

    &:hover {
      color: on-background;
      opacity: 1;
    }

    &[aria-current='page'] {
      font-weight: 600;
      border-color: primary;
      color: on-background;
      opacity: 1;
    }
  }
`

const NavLink = ({ children, href }) => {
  const child = React.Children.only(children);
  const router = useRouter();
  
  return (
    <Link href={href}>
      {React.cloneElement(child, {
        "aria-current": trim(router.asPath) === href ? "page" : null
      })}
    </Link>
  );
};

export default function SideNav({ navGroups }) {
  return (
    <Nav>
      {navGroups.map((navGroup, index) => (
        <NavGroup key={index}>
          <NavGroupTitle>{navGroup.section}</NavGroupTitle>
          <NavGroupMenu>
            {navGroup.children.map((page) => (
              <NavGroupMenuItem key={page.title}>
                <NavLink href={page.slug} >
                  <a>{page.title}</a>
                </NavLink>
              </NavGroupMenuItem>
            ))}
          </NavGroupMenu>
        </NavGroup>
      ))}
    </Nav>
  )
}
