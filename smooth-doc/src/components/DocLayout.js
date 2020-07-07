import React from 'react'
import styled, { css, up, th } from '@xstyled/styled-components'
import { Container } from './Container'
import { Sidebar } from './Sidebar'
import { BaseLayout } from './BaseLayout'
import { Article } from './Article'
import { MenuProvider, MenuConsumer } from './MenuContext'
import ChevronUpSolid from './icons/ChevronUpSolid'
import { CarbonAd } from './CarbonAd'

const FloatingAd = styled.div`
  display: none;

  ${up(
    'md',
    css`
      float: right;
      display: block;
      margin-right: -36;
    `,
  )}
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
  height: 100vh;
  width: 100vw;
  transform: translateY(${th.size(50)});
  pointer-events: none;
  overflow-y: auto;

  ${(p) =>
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
      height: calc(100vh - 70px);
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

  ${(p) =>
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
        <Container px={0}>
          <Wrapper>
            <ArticleContainer>
              <Article>
                <FloatingAd>
                  <CarbonAd />
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
        </Container>
      </BaseLayout>
    </MenuProvider>
  )
}
