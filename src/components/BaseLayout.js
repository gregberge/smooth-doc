import React from 'react'
import { styled, th } from '@smooth-ui/core-sc'
import { WebsiteHeader } from './WebsiteHeader'
import { ProjectHeader } from './ProjectHeader'
import { GlobalStyle } from './GlobalStyle'
import { Head } from './Head'
import { ThemeProvider } from './ThemeProvider'

const Headers = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
`

const PageWrapper = styled.div`
  margin-top: ${th('headerHeight')};
  background-color: ${th('gray100')};
  min-height: calc(100vh - ${th('headerHeight')});
`

export const BaseLayout = ({ children, pageContext }) => (
  <ThemeProvider>
    <div>
      <GlobalStyle />
      <Head pageContext={pageContext} />
      <Headers>
        <WebsiteHeader />
        <ProjectHeader />
      </Headers>
      <PageWrapper>{children}</PageWrapper>
    </div>
  </ThemeProvider>
)
