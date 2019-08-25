import React from 'react'
import { th, styled, up, css } from '@smooth-ui/core-sc'
import Highlight, { defaultProps } from 'prism-react-renderer'
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

export function Code({ children, lang = 'markup', live, noInline }) {
  if (live) {
    return (
      <LiveProvider
        code={children.trim()}
        transformCode={code => `/* @jsx mdx */ ${importToRequire(code)}`}
        scope={{ mdx, require: req }}
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
