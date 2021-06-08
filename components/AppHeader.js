import React from 'react'

import styled, { x, useColorMode, down, css } from '@xstyled/styled-components'
import { ScreenContainer } from './ScreenContainer'
import { DocSearch } from './DocSearch'
import { NavLink } from './Nav'
import { AppNav } from './AppNav'

import siteMetadata from '../config/siteMetadata'


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

function useLogo() {
  const [mode] = useColorMode()
  switch (mode) {
    case 'dark':
      return '/images/logo-nav-dark.svg'
    case 'light':
    default:
      return '/images/logo-nav-light.svg'
  }
}

export function AppHeader() {
  const logo = useLogo()

  return (
    <OuterHeader>
      <ScreenContainer>
        <NavSkipLink tabindex="0" href="#main">
          Skip to content
        </NavSkipLink>
        <x.div row alignItems="center" flexWrap="nowrap" mx={-2}>
          <x.div col px={2} display="flex">
            <NavLink
              row
              display="inline-flex"
              alignItems="center"
              flexWrap="nowrap"
              mx={-2}
              href="/"
            >
              {logo ? (
                <x.img
                  col="auto"
                  px={2}
                  height={32}
                  src={logo}
                  alt={siteMetadata.title}
                />
              ) : (
                <x.h2
                  col="auto"
                  flex="0 1 auto"
                  px={2}
                  alignItems="center"
                  fontSize={18}
                  m={0}
                >
                  {siteMetadata.title}
                </x.h2>
              )}
            </NavLink>
          </x.div>
          {siteMetadata.docSearch ? (
            <x.div col="auto" px={2} display={{ xs: 'none', md: 'block' }}>
              <DocSearch {...siteMetadata.docSearch} />
            </x.div>
          ) : null}
          <AppNav col="auto" px={2} />
        </x.div>
      </ScreenContainer>
    </OuterHeader>
  )
}
