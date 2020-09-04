import React from 'react'
import { Box, useColorMode } from '@xstyled/styled-components'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'

const modeIcons = {
  light: RiMoonClearLine,
  dark: RiSunLine,
}

function getInverseMode(mode) {
  return mode === 'light' ? 'dark' : 'light'
}

export const ColorModeSwitcher = React.forwardRef((props, ref) => {
  const [mode, setMode] = useColorMode()
  const Icon = modeIcons[mode]
  return (
    <Box
      ref={ref}
      forwardedAs="button"
      type="button"
      onClick={() => setMode(getInverseMode)}
      {...props}
    >
      <Icon style={{ width: 24, height: 24 }} />
    </Box>
  )
})
