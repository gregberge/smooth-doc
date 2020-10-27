import styled, { css, up, down, th } from '@xstyled/styled-components'

export const Article = styled.article`
  .anchor {
    fill: on-background;
  }

  code {
    background-color: background-light;
    color: on-background-primary;
    border-radius: base;
    padding: 0 1;
  }

  mark {
    background-color: background-mark;
  }

  > pre,
  > summary > pre {
    overflow: auto;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    margin: 3 -3;
    background-color: editor-background;
    color: editor-on;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    hyphens: none;
    border-left: ${th.space(4)} solid transparent;
    border-right: ${th.space(4)} solid transparent;

    ${up(
      'sm',
      css`
        border-radius: editor;
        margin: 3 -2;
      `,
    )}
  }

  > p {
    margin-top: 4;
    font-size: 17;
    line-height: 1.7;
    max-width: 52em;

    &:first-of-type {
      margin-top: 3;
    }

    ${up(
      'lg',
      css`
        font-size: 16;
      `,
    )}
  }

  /* Intro */
  > h1 + p {
    font-size: 18;
    font-weight: 300;
    color: on-background-light;
    margin: 2 0 !important;

    ${up(
      'xl',
      css`
        font-size: 24;
      `,
    )};

    a,
    strong {
      font-weight: 400;
    }
  }

  > hr {
    margin: 0;
    height: 0;
    border: 0;
    border-top: 1;
    border-color: layout-border;
    margin: 4 0;

    &:first-child {
      margin-top: 0;
    }
  }

  > h1 {
    font-size: 40;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 2;
    margin-top: 40;

    ${up(
      'md',
      css`
        font-size: 48;
        font-weight: 700;
      `,
    )};
  }

  > h2 {
    border-top: 1;
    border-color: layout-border;
    margin-top: 5;
    padding-top: 4;
    line-height: 1.2;
    font-size: 20;

    ${up(
      'lg',
      css`
        font-size: 30;
      `,
    )};
  }

  > h1 + h2,
  > h2:first-child {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }

  > h3 {
    font-size: 20;
    padding-top: 4;

    ${down(
      'sm',
      css`
        overflow-wrap: break-word;
        word-break: break-word;
      `,
    )}

    ${up(
      'xl',
      css`
        font-size: 22;
        line-height: 1.3;
      `,
    )}
  }

  > h4 {
    margin-top: 5;
    font-weight: 500;
    font-size: 18;
    line-height: 1.3;
  }

  > h2 + h3,
  > h2 + h3:first-of-type {
    padding-top: 3;
  }

  > h4 + p {
    margin-top: 3;
  }

  > ul + p {
    margin-top: 2;
  }

  .editor {
    background-color: editor-background;
    color: editor-text;
    padding: 3 4;
    margin: 4 -3;
    overflow: auto;
    font-size: 14;
    line-height: 1.45;
    border-radius: base;

    ${down(
      'sm',
      css`
        margin-left: -4;
        margin-right: -4;
        border-radius: 0;
      `,
    )}
  }

  > code {
    background-color: editor-background;
    border-radius: base;
    color: inherit;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-size: 85%;
    padding: 1 2;
  }

  > table {
    display: block;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 2;
    margin-top: 3;
    overflow: auto;
    width: 100%;
    text-align: left;
    font-size: 95%;

    tr {
      background-color: transparent;
      border-top: 1;
      border-color: layout-border;
    }

    td,
    th {
      border-top: 1;
      border-bottom: 1;
      border-color: layout-border;
      padding: 2 3;
    }

    th {
      color: on-background-light;
      background-color: background-light;
      font-weight: 600;
      font-size: 100%;
    }

    td {
      font-size: 85%;
    }
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    margin-top: 4;
    font-size: 16;
    padding-left: 4;

    p,
    p:first-of-type {
      font-size: 16;
      margin-top: 0;
      line-height: 1.2;
    }

    li {
      margin-top: 2;
    }

    ol,
    ul {
      margin-left: 4;
      margin-top: 2;
    }
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  > blockquote {
    font-size: 16;
    background-color: blockquote-background;
    border-left: 8;
    border-color: blockquote-border;
    padding: 3;
    margin: 3 -2;
    border-radius: blockquote;

    code {
      background-color: rgba(255, 255, 255, 0.1);
      background-blend-mode: color;
      color: on-background;
      border-radius: base;
      padding: 0 1;
    }

    p {
      margin-top: 3;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      transition: fast;
      color: blockquote-link;
      text-decoration: underline;

      &:hover {
        color: on-background;
      }
    }
  }

  a {
    transition: fast;
    text-decoration: underline;
    color: on-background-primary;

    &:hover {
      color: on-background-primary-dark;
    }
  }
`
