import React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { up, th } from '@xstyled/system'
import { Grid } from '@smooth-ui/core-sc'
import { Sidebar } from './Sidebar'
import { BaseLayout } from './BaseLayout'
import { Article } from './Article'
import { MenuProvider, MenuConsumer } from './MenuContext'
import ChevronUpSolid from './icons/ChevronUpSolid'
import { CodeFund } from './CodeFund'

const FloatingAd = styled.div`
  display: none;

  ${up(
    'md',
    css`
      float: right;
      display: block;
      width: 200;
      margin-right: -36;
    `,
  )}

  @media only screen and (min-width: 1560px) {
    ${up(
      'xl',
      css`
        position: fixed;
        bottom: 0;
        left: 0;
      `,
    )}
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 0;
`

const ArticleContainer = styled.div`
  flex-grow: 1;
  padding: 0 20 50;
  overflow: hidden;
  word-wrap: break-word;
`

const SidebarContainer = styled.div`
  background-color: secondary-bg;
  border-left: 1;
  border-color: border;
  transition: base;
  transition-property: transform, opacity;
  position: fixed;
  opacity: 0;
  height: calc(100vh - ${th.size('header-height')});
  width: 100vw;
  transform: translateY(${th.size(50)});
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
      flex: 0 0 ${th.size(180)};
      margin-left: 16;
    `,
  )}

  ${up(
    'lg',
    css`
      flex: 0 0 ${th.size(230)};
      margin-left: 50;
    `,
  )}
`

const SidebarWrapper = styled.div`
  ${up(
    'sm',
    css`
      padding-top: 0;
      position: fixed;
      height: calc(100vh - ${th.size('header-height')});
      overflow-y: auto;
      z-index: 2;
      margin-right: -999;
      padding-right: 999;
      background-color: secondary-bg;
    `,
  )}
`

const MenuButton = styled.button`
  border: 0;
  border-radius: 50%;
  width: 60;
  height: 60;
  position: fixed;
  right: ${th.size(8)};
  bottom: ${th.size(8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: bg;
  background-color: text;
  transition: base;
  transition-property: color;
  box-shadow: ${th.color('menu-button-shadow')} 0 0 ${th.size(20)};
  appearance: none;

  &:focus {
    outline: none;
    color: bg;
  }

  > svg:first-child {
    transition: transform 200ms ease-in-out;
    transform: translateX(-1px);
  }

  > svg:last-child {
    transition: transform 200ms ease-in-out;
    transform: translate(-1px) rotate(180deg);
  }

  ${p =>
    p.active &&
    css`
      > svg:first-child {
        transform: translate(-1px, 10px);
      }

      > svg:last-child {
        transform: translate(-1px, -10px) rotate(180deg);
      }
    `}

  ${up(
    'sm',
    css`
      display: none;
    `,
  )}
`

export function DocLayout({ children, ...props }) {
  return (
    <MenuProvider>
      <BaseLayout variant="light" {...props}>
        <Grid gutter={0}>
          <Wrapper>
            <ArticleContainer>
              <Article>
                <FloatingAd>
                  <CodeFund />
                </FloatingAd>
                {children}
              </Article>
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
                    <ChevronUpSolid width={15} height={15} />
                    <ChevronUpSolid width={15} height={15} />
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
