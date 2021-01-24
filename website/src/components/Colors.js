import * as React from 'react'
import styled, { x, useColor } from '@xstyled/styled-components'

const ColorSwatch = styled.box`
  border-radius: base;
  width: 48;
  height: 48;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06) !important;
`

export function ColorItem({ color }) {
  const cssColor = useColor(`${color}-500`)
  const [, hexColor] = cssColor.match(/#([\w\d]{6,8})/)
  return (
    <x.div row mx={-2}>
      <x.div col="auto" px={2}>
        <ColorSwatch style={{ backgroundColor: cssColor }} />
      </x.div>
      <x.div col="auto" px={2}>
        <x.div fontWeight={500}>{color}</x.div>
        <x.div>#{hexColor}</x.div>
      </x.div>
    </x.div>
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
    <x.div row m={-3} mt={4}>
      {colors.map((color) => (
        <x.div key={color} col={{ xs: 1, md: 1 / 3 }} p={3}>
          <ColorItem color={color} />
        </x.div>
      ))}
    </x.div>
  )
}
