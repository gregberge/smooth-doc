import React from 'react'
import { ThemeProvider as BaseThemeProvider } from '@smooth-ui/core-sc'
import theme from '../style/theme'

export const ThemeProvider = ({ children, theme: otherTheme }) => (
  <BaseThemeProvider theme={{ ...theme, ...otherTheme }}>
    {children}
  </BaseThemeProvider>
)
