import React from 'react'
import styled, { css, up, th, useUp } from '@xstyled/styled-components'
import { useDialogState, Dialog, DialogDisclosure } from 'reakit/Dialog'
import { Portal } from 'reakit/Portal'
import { Container } from './Container'
import { Sidebar } from './Sidebar'
import { BaseLayout } from './BaseLayout'
import { Article } from './Article'
import ChevronUpSolid from './icons/ChevronUpSolid'
import { CarbonAd } from './CarbonAd'

const FloatingAd = styled.div`
  display: none;

  ${up(
    'md',
    css`
      float: right;
      display: block;
      margin-right: -20px;
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

const SidebarDialog = styled.div`
  background-color: secondary-bg;
  position: fixed;
  top: 67;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  overflow: auto;

  &:focus {
    outline: none;
  }
`

const SidebarContainer = styled.div`
  background-color: secondary-bg;
  border-left: 1;
  border-color: border;
  position: relative;
  flex: 0 0 ${th.size(180)};
  margin-left: 16;

  ${up(
    'lg',
    css`
      flex: 0 0 ${th.size(230)};
      margin-left: 50;
    `,
  )}
`

const SidebarWrapper = styled.div`
  position: fixed;
  height: calc(100vh - 70px);
  overflow-y: auto;
  z-index: 2;
  margin-right: -999;
  padding-right: 999;
  background-color: secondary-bg;
`

const MenuButton = styled.button`
  border: 0;
  border-radius: 50%;
  width: 60;
  height: 60;
  position: fixed;
  right: ${th.size(8)};
  bottom: ${th.size(8)};
  z-index: 25;
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

  &[aria-expanded='true'] {
    > svg:first-child {
      transform: translate(-1px, 10px);
    }

    > svg:last-child {
      transform: translate(-1px, -10px) rotate(180deg);
    }
  }
`

function SidebarLogic() {
  const dialog = useDialogState()
  return (
    <>
      <Dialog {...dialog} as={SidebarDialog}>
        <Sidebar />
      </Dialog>
      <Portal>
        <DialogDisclosure {...dialog} as={MenuButton}>
          <ChevronUpSolid width={15} height={15} />
          <ChevronUpSolid width={15} height={15} />
        </DialogDisclosure>
      </Portal>
    </>
  )
}

export function DocLayout({ children, ...props }) {
  const sm = useUp('sm')
  return (
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
          {sm ? (
            <SidebarContainer>
              <SidebarWrapper>
                <Sidebar />
              </SidebarWrapper>
            </SidebarContainer>
          ) : (
            <SidebarLogic />
          )}
        </Wrapper>
      </Container>
    </BaseLayout>
  )
}
