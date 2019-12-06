import React from 'react'
import styled from '@xstyled/styled-components'
import { ProjectHeader } from './ProjectHeader'
import { Head } from './Head'

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const PageWrapper = styled.box`
  background-color: bg;
  flex: 1;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export function BaseLayout({ children, pageContext, backgroundColor }) {
  return (
    <Container>
      <Head pageContext={pageContext} />
      <HeaderContainer>
        <ProjectHeader />
      </HeaderContainer>
      <PageWrapper backgroundColor={backgroundColor}>{children}</PageWrapper>
    </Container>
  )
}
