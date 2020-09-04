import React from 'react'
import styled, { useTheme, th } from '@xstyled/styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview as BaseLivePreview,
} from 'react-live'
import { mdx } from '@mdx-js/react'

const Editor = styled.div`
  padding: 3 0;
  font-size: 15;
  line-height: 1.45;
  word-break: normal;

  textarea {
    &:focus {
      outline: none;
    }
  }
`

const LivePreview = styled(BaseLivePreview)`
  padding: 3 4;
  margin: 3 0 0;
  border: 1;
  border-color: editor-border;
  border-image: initial;
  border-radius: editor;
  white-space: normal;
  font-family: base;

  background-color: background;
  color: on-background;

  & + ${Editor} {
    margin-top: 2;
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
    throw new Error(
      `Unable to resolve path to module '${path}'. Use "LiveConfig" to provide modules.`,
    )
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
  const theme = useTheme()
  return th('prism-theme')({ theme })
}

export function Code({
  children,
  lang = 'markup',
  live,
  noInline,
  editorStyle,
}) {
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
        <Editor style={editorStyle}>
          <LiveEditor padding={0} />
        </Editor>
        <LiveError />
      </LiveProvider>
    )
  }
  return (
    <Editor style={editorStyle}>
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
