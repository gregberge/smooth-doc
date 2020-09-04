import React from 'react'
import styled, { Box, useTheme, th } from '@xstyled/styled-components'

const ColorSwatch = styled.box`
  border-radius: base;
  width: 48;
  height: 48;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06) !important;
`

function useColor(color) {
  const theme = useTheme()
  return th.color(color)({ theme })
}

export function ColorItem({ color }) {
  const cssColor = useColor(color)
  const [, hexColor] = cssColor.match(/#([\w\d]{6})/)
  return (
    <Box row mx={-2}>
      <Box col="auto" px={2}>
        <ColorSwatch style={{ backgroundColor: cssColor }} />
      </Box>
      <Box col="auto" px={2}>
        <Box fontWeight={500}>{color}</Box>
        <Box>#{hexColor}</Box>
      </Box>
    </Box>
  )
}

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
]

export function BuiltInColors() {
  return (
    <Box row m={-3} mt={4}>
      {colors.map((color) => (
        <Box key={color} col={{ xs: 1, md: 1 / 3 }} p={3}>
          <ColorItem color={color} />
        </Box>
      ))}
    </Box>
  )
}
