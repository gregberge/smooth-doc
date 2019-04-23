import React, { createContext, useState, useCallback, useMemo } from 'react'

const MenuContext = createContext()

export function MenuProvider({ children }) {
  const [opened, setOpened] = useState(false)
  const toggle = useCallback(() => setOpened(opened => !opened), [])
  const value = useMemo(() => ({ opened, toggle }), [opened, toggle])
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export const { Consumer: MenuConsumer } = MenuContext
