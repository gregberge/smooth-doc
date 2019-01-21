import React from 'react'
import Prism from 'prismjs'
import Highlight, { defaultProps } from 'prism-react-renderer'
import './code-theme.css'

const theme = null

export function Code({ children, lang = 'markup' }) {
  return (
    <Highlight
      {...defaultProps}
      Prism={Prism}
      theme={theme}
      code={children.trim()}
      language={lang}
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
  )
}
