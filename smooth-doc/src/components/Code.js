import React from 'react'
import styled, {
  css,
  ThemeContext,
  useColorMode,
  up,
} from '@xstyled/styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview as BaseLivePreview,
} from 'react-live'
import { mdx } from '@mdx-js/react'
import getPrismTheme from './prismTheme'

const Editor = styled.div`
  background-color: editor-bg;
  color: editor-text;
  padding: 15 20;
  margin: 25 -20;
  overflow: auto;
  font-size: 14;
  line-height: 1.45;
  overflow-y: auto;

  > textarea:focus {
    outline: none;
  }

  ${up(
    'sm',
    css`
      border-radius: 3;
    `,
  )}
`

const LivePreview = styled(BaseLivePreview)`
  padding: 15 20;
  margin: 25 -20 10;
  border: 1;
  border-color: border;
  border-image: initial;
  border-radius: 3;

  & + ${Editor} {
    margin-top: 10;
  }
`

const globalModules = {
  react: 'React',
}

export function LiveConfig({ modules }) {
  Object.assign(globalModules, modules)
  return null
}

function req(path) {
  const dep = globalModules[path]

  if (!dep) {
    throw new Error(`Unable to resolve path to module '${path}'.`)
  }
  return dep
}

function importToRequire(code) {
  return (
    code
      // { a as b } => { a: b }
      .replace(/([0-9a-z_$]+) as ([0-9a-z_$]+)/gi, '$1: $2')
      // import { a } from "a" => const { a } = require("b")
      .replace(
        /import {([^}]+)} from ([^\s;]+);?/g,
        'const {$1} = require($2);',
      )
      // import a from "a" => const a = require("a").default || require("a")
      .replace(
        /import ([\S]+) from ([^\s;]+);?/g,
        'const $1 = require($2).default || require($2);',
      )
      // import * as a from "a"
      .replace(
        /import \* as ([\S]+) from ([^\s;]+);?/g,
        'const $1 = require($2);',
      )
      // import a from "a" => const a = require("a").default || require("a")
      .replace(
        /import (.+),\s?{([^}]+)} from ([^\s;]+);?/g,
        [
          'const $1 = require($3).default || require($3);',
          'const {$2} = require($3);',
        ].join('\n'),
      )
  )
}

export function usePrismTheme() {
  const theme = React.useContext(ThemeContext)
  const [mode] = useColorMode()
  return getPrismTheme({ theme, mode })
}

export function Code({ children, lang = 'markup', live, noInline }) {
  const prismTheme = usePrismTheme()
  if (live) {
    return (
      <LiveProvider
        code={children.trim()}
        transformCode={(code) => `/* @jsx mdx */ ${importToRequire(code)}`}
        scope={{ mdx, require: req }}
        language={lang}
        theme={prismTheme}
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
        theme={prismTheme}
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
