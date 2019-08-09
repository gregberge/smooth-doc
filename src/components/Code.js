import React from 'react'
import { th, styled, up, css } from '@smooth-ui/core-sc'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { useMDXScope } from 'gatsby-plugin-mdx/context'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview as BaseLivePreview,
} from 'react-live'
import { mdx } from '@mdx-js/react'
import theme from './prismTheme'

const Editor = styled.div`
  background-color: rgb(40, 44, 52);
  color: ${th('editorTextColor')};
  padding: 15px 20px;
  margin: 25px -20px;
  overflow: auto;
  font-size: 14px;
  line-height: 1.45;
  border-radius: 3px;
  border-radius: 0;
  overflow-y: auto;

  > textarea:focus {
    outline: none;
    border: 1px solid white;
  }

  ${up(
    'sm',
    css`
      border-radius: 3px;
    `,
  )}
`

const LivePreview = styled(BaseLivePreview)`
  padding: 15px 20px;
  margin: 25px -20px 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(33, 33, 33, 0.15);
  border-image: initial;
  border-radius: 0.25em;

  & + ${Editor} {
    margin-top: 10px;
  }
`

const globalScope = {}

export function LiveScope({ scope }) {
  Object.assign(globalScope, scope)
  return null
}

export function Code({ children, lang = 'markup', live, noInline }) {
  const scope = useMDXScope()
  if (live) {
    return (
      <LiveProvider
        code={children.trim()}
        transformCode={code => `/* @jsx mdx */${code}`}
        scope={{ mdx, ...scope, ...globalScope }}
        language={lang}
        theme={theme}
        noInline={noInline}
      >
        <LivePreview />
        <Editor as={LiveEditor} />
        <LiveError />
      </LiveProvider>
    )
  }
  return (
    <Editor>
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={lang}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Editor>
  )
}
