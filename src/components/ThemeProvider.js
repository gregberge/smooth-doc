import React from 'react'
import { theme, ThemeProvider as BaseThemeProvider } from '@smooth-ui/core-sc'

const baseTheme = {
  ...theme,
  secondary: '#3D3D3D',
  subtitleColor: '#6d6d6d',
  editorTextColor: '#1b2b35',
  blockquoteColor: '#ffe564',
  textColor: theme.gray800,
  headerHeight: '146px',
}

export function ThemeProvider({ children, theme }) {
  return (
    <BaseThemeProvider theme={{ ...baseTheme, ...theme }}>
      {children}
    </BaseThemeProvider>
  )
}
