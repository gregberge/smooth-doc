import styled, { css, up, down } from '@xstyled/styled-components'

export const Article = styled.article`
  > p {
    margin-top: 30;
    font-size: 17;
    line-height: 1.7;
    max-width: 42em;

    &:first-of-type {
      margin-top: 15;
    }

    ${up(
      'lg',
      css`
        font-size: 16;
        margin-top: 25;
      `,
    )}
  }

  /* Intro */
  > h1 + p {
    font-size: 18;
    font-weight: 300;
    color: subtitle;

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
    height: 1;
    margin-bottom: -1;
    border: 0;
    border-bottom: 1;
    border-color: subtitle;
    margin-top: 40;

    &:first-child {
      margin-top: 0;
    }
  }

  > h1 {
    font-size: 40;
    line-height: 1.1;
    font-weight: 600;
    margin-top: 40;
    margin-bottom: 30;

    ${up(
      'md',
      css`
        font-size: 60;
        font-weight: 700;
        margin-bottom: 50;
        margin-top: 60;
      `,
    )};
  }

  > h2 {
    border-top: 1;
    border-color: border;
    margin-top: 44;
    padding-top: 40;
    line-height: 1.2;
    font-size: 20;

    ${up(
      'lg',
      css`
        font-size: 35;
      `,
    )};
  }

  > h1 + h2 {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }

  > h3 {
    padding-top: 45;

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
        font-size: 25;
        line-height: 1.3;
      `,
    )}
  }

  > h3 {
    padding-top: 45;

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
        font-size: 25;
        line-height: 1.3;
      `,
    )}
  }

  > h4 {
    margin-top: 50;
    font-weight: 400;
    font-size: 20;
    line-height: 1.3;
    color: subtitle;
  }

  > h2 + h3,
  > h2 + h3:first-of-type {
    padding-top: 30;
  }

  > h4 + p {
    margin-top: 20;
  }

  .editor {
    background-color: secondary-bg;
    color: editor-text;
    padding: 15 20;
    margin: 25 -20;
    overflow: auto;
    font-size: 14;
    line-height: 1.45;
    border-radius: 3;

    ${down(
      'sm',
      css`
        margin-left: -20;
        margin-right: -20;
        border-radius: 0;
      `,
    )}
  }

  > code {
    background-color: editor-bg;
    border-radius: 3;
    color: inherit;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-size: 85%;
    padding: 3 6;
  }

  > table {
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    margin-bottom: 16;
    margin-top: 20;
    overflow: auto;
    width: 100%;

    thead {
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      padding: 0;
      vertical-align: baseline;
    }

    tr {
      background-color: transparent;
      border-top: 1;
      border-color: border;
    }

    th {
      background-color: inherit;
      font-weight: 600;
    }

    td,
    th {
      border: 1;
      border-color: border;
      padding: 6 13;
    }
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    margin-top: 20;
    font-size: 16;
    padding-left: 20;

    p,
    p:first-of-type {
      font-size: 16;
      margin-top: 0;
      line-height: 1.2;
    }

    li {
      margin-top: 10;
    }

    ol,
    ul {
      margin-left: 20;
      margin-top: 10;
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
    background-color: blockquote-bg;
    border-left: 8;
    border-color: blockquote;
    padding: 20 45 20 26;
    margin: 20 -20 30;

    p {
      margin-top: 15;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
