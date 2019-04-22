import React from 'react'
import { Grid, styled, up, css, th } from '@smooth-ui/core-sc'
import { Sidebar } from './Sidebar'
import { BaseLayout } from './BaseLayout'
import { Article } from './Article'
import { MenuProvider, MenuConsumer } from './MenuContext'
import Chevron from './icons/Chevron'

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
  word-wrap: break-word;
`

const SidebarContainer = styled.div`
  background-color: ${th('gray100')};
  border-left: 1px solid rgb(236, 236, 236);
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  position: fixed;
  opacity: 0;
  height: calc(100vh - ${th('headerHeight')});
  width: 100vw;
  transform: translateY(50px);
  pointer-events: none;
  overflow-y: auto;

  ${p =>
    p.opened &&
    css`
      pointer-events: auto;
      transform: translateY(0);
      opacity: 1;
    `}

  ${up(
    'sm',
    css`
      overflow-y: visible;
      height: auto;
      pointer-events: auto;
      transform: none;
      width: auto;
      opacity: 1;
      position: relative;
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
  ${up(
    'sm',
    css`
      padding-top: 0;
      position: fixed;
      height: calc(100vh - ${th('headerHeight')});
      z-index: 2;
      margin-right: -999px;
      padding-right: 999px;
      background-color: rgb(247, 247, 247);
    `,
  )}
`

const MenuButton = styled.button`
  border: 0;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${th('white')};
  background-color: ${th('gray800')};
  transition: color 300ms;
  position: fixed;
  right: 8px;
  bottom: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;

  &:focus {
    outline: none;
    color: ${th('white')};
  }

  > svg:first-child {
    transition: transform 200ms ease-in-out;
    transform: translate(-1px) rotate(180deg);
  }

  > svg:last-child {
    transition: transform 200ms ease-in-out;
    transform: translate(-1px);
  }

  ${p =>
    p.active &&
    css`
      > svg:first-child {
        transform: translate(-1px, 10px) rotate(180deg);
      }

      > svg:last-child {
        transform: translate(-1px, -10px);
      }
    `}

  ${up('sm', 'display: none;')}
`

export function DocLayout({ children, ...props }) {
  return (
    <MenuProvider>
      <BaseLayout variant="light" {...props}>
        <Grid gutter={0}>
          <Wrapper>
            <ArticleContainer>
              <Article>{children}</Article>
            </ArticleContainer>
            <MenuConsumer>
              {({ opened, toggle }) => (
                <>
                  <SidebarContainer opened={opened}>
                    <SidebarWrapper>
                      <Sidebar />
                    </SidebarWrapper>
                  </SidebarContainer>
                  <MenuButton active={opened} onClick={toggle}>
                    <Chevron width={15} height={15} />
                    <Chevron width={15} height={15} />
                  </MenuButton>
                </>
              )}
            </MenuConsumer>
          </Wrapper>
        </Grid>
      </BaseLayout>
    </MenuProvider>
  )
}
