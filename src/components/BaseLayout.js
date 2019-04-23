import React from 'react'
import { styled, th, css } from '@smooth-ui/core-sc'
import { WebsiteHeader } from './WebsiteHeader'
import { ProjectHeader } from './ProjectHeader'
import { Head } from './Head'

const Headers = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const variants = {
  default: css`
    background-color: ${th('gray100')};
  `,
  light: css`
    background-color: ${th('white')};
  `,
}

const PageWrapper = styled.div`
  ${p => variants[p.variant]};
  position: relative;
`

export function BaseLayout({ children, pageContext, variant = 'default' }) {
  return (
    <div>
      <Head pageContext={pageContext} />
      <Headers>
        <WebsiteHeader />
        <ProjectHeader />
      </Headers>
      <PageWrapper variant={variant}>{children}</PageWrapper>
    </div>
  )
}
