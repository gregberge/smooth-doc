import React from 'react'
import { Grid, styled, up, css, th } from '@smooth-ui/core-sc'
import { Sidebar } from './Sidebar'
import { BaseLayout } from './BaseLayout'
import { Article } from './Article'
import { MenuProvider, MenuConsumer } from './MenuContext'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 0;
`

const ArticleContainer = styled.div`
  flex-grow: 1;
  padding: 0 20px 50px;
  overflow: hidden;
`

const SidebarContainer = styled.div`
  background-color: ${th('gray100')};
  border-left: 1px solid rgb(236, 236, 236);
  transition: transform 150ms ease-out;
  position: fixed;
  left: auto;
  right: 0;
  bottom: 0;
  top: ${th('headerHeight')};
  flex: 0 0 auto;

  ${p =>
    p.toggled &&
    css`
      transform: translateX(-200px);
    `}

  ${up(
    'sm',
    css`
      position: relative;
      top: 0;
      transform: none;
      flex: 0 0 200px;
      margin-left: 80px;
    `,
  )}

  ${up(
    'lg',
    css`
      flex: 0 0 300px;
    `,
  )}
`

const SidebarWrapper = styled.div`
  position: fixed;
  z-index: 2;
  height: calc(100vh - ${th('headerHeight')});
  overflow-y: auto;
  margin-right: -999px;
  padding-right: 999px;
  background-color: rgb(247, 247, 247);
`

export const DocLayout = ({ children, ...props }) => (
  <MenuProvider>
    <BaseLayout variant="light" {...props}>
      <Grid gutter={0}>
        <Wrapper>
          <ArticleContainer>
            <Article>{children}</Article>
          </ArticleContainer>
          <MenuConsumer>
            {({ toggled }) => (
              <SidebarContainer toggled={toggled}>
                <SidebarWrapper>
                  <Sidebar />
                </SidebarWrapper>
              </SidebarContainer>
            )}
          </MenuConsumer>
        </Wrapper>
      </Grid>
    </BaseLayout>
  </MenuProvider>
)
