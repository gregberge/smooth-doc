import React from 'react'
import { transparentize } from 'polished'
import {
  ThemeProvider as SCThemeProvider,
  ColorModeProvider,
} from '@xstyled/styled-components'
import { th } from '@xstyled/system'

const baseTheme = {
  initialColorModeName: 'light',
  space: {},
  transitions: {
    base: '300ms ease',
  },
  sizes: {
    'header-height': 122,
  },
  colors: {
    bg: '#fff',
    'secondary-bg': '#f7f7f7',
    primary: '#bd4932',
    border: '#ececec',
    text: '#222',
    'editor-text': '#403f53',
    'editor-bg': '#f4f4f4',
    blockquote: '#ffe564',
    'blockquote-bg': p => transparentize(0.7, th.color('blockquote')(p)),
    subtitle: '#6d6d6d',
    'home-hero-img-bg': 'transparent',
    'nav-link': th.color('text'),
    'nav-link-hover': p => transparentize(0.3, th.color('nav-link')(p)),
    'menu-button-shadow': p => transparentize(0.7, th.color('text')(p)),
    modes: {
      dark: {
        primary: '#ff6042',
        bg: '#000',
        subtitle: '#eee',
        'secondary-bg': '#111',
        border: '#333',
        'home-hero-img-bg': '#fff',
        text: '#fff',
        'editor-text': '#ddd',
        'editor-bg': '#222',
      },
    },
  },
}

export function ThemeProvider({ children, theme }) {
  return (
    <SCThemeProvider theme={{ ...baseTheme, ...theme }}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </SCThemeProvider>
  )
}
