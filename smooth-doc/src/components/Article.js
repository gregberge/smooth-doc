import { transparentize } from 'polished'
import { styled, up, down, css, th } from '@smooth-ui/core-sc'

export const Article = styled.article`
  > p {
    margin-top: 30px;
    font-size: 17px;
    line-height: 1.7;
    max-width: 42em;

    &:first-of-type {
      margin-top: 15px;
    }

    ${up(
      'lg',
      css`
        font-size: 16px;
        margin-top: 25px;
      `,
    )}
  }

  /* Intro */
  > h1 + p {
    font-size: 18px;
    font-weight: 300;
    color: ${th('subtitleColor')};

    ${up(
      'xl',
      css`
        font-size: 24px;
      `,
    )};

    a,
    strong {
      font-weight: 400;
    }
  }

  > hr {
    height: 1px;
    margin-bottom: -1px;
    border: 0;
    border-bottom: 1px solid ${th('subtitleColor')};
    margin-top: 40px;

    &:first-child {
      margin-top: 0;
    }
  }

  > h1 {
    font-size: 40px;
    line-height: 45px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 30px;

    ${up(
      'md',
      css`
        font-size: 60px;
        line-height: 65px;
        font-weight: 700;
        margin-bottom: 50px;
        margin-top: 60px;
      `,
    )};
  }

  > h2 {
    border-top: 1px solid ${th('gray200')};
    margin-top: 44px;
    padding-top: 40px;
    line-height: 1.2;
    font-size: 20px;

    ${up(
      'lg',
      css`
        font-size: 35px;
      `,
    )};
  }

  > h1 + h2 {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }

  > h3 {
    padding-top: 45px;

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
        font-size: 25px;
        line-height: 1.3;
      `,
    )}
  }

  > h3 {
    padding-top: 45px;

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
        font-size: 25px;
        line-height: 1.3;
      `,
    )}
  }

  > h4 {
    margin-top: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;
    color: ${th('subtitleColor')};
  }

  > h2 + h3,
  > h2 + h3:first-of-type {
    padding-top: 30px;
  }

  > h4 + p {
    margin-top: 20px;
  }

  .editor {
    background-color: ${th('gray100')};
    color: ${th('editorTextColor')};
    padding: 15px 20px;
    margin: 25px -20px;
    overflow: auto;
    font-size: 14px;
    line-height: 1.45;
    border-radius: 3px;

    ${down(
      'sm',
      css`
        margin-left: -20px;
        margin-right: -20px;
        border-radius: 0;
      `,
    )}
  }

  > code {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    color: inherit;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-size: 85%;
    padding: 3.2px 6.4px;
  }

  > table {
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    margin-bottom: 16px;
    margin-top: 20px;
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
      border-top: 1px solid ${th('gray200')};
    }

    th {
      background-color: inherit;
      font-weight: 600;
    }

    td,
    th {
      border: 1px solid ${th('gray200')};
      padding: 6px 13px;
    }
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    margin-top: 20px;
    font-size: 16px;
    padding-left: 20px;

    p,
    p:first-of-type {
      font-size: 16px;
      margin-top: 0;
      line-height: 1.2;
    }

    li {
      margin-top: 10px;
    }

    ol,
    ul {
      margin-left: 20px;
      margin-top: 10px;
    }
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  > blockquote {
    font-size: 16px;
    background-color: ${th('blockquoteColor', color =>
      transparentize(0.7, color),
    )};
    border-left: 8px solid ${th('blockquoteColor')};
    padding: 20px 45px 20px 26px;
    margin: 20px -20px 30px;

    p {
      margin-top: 15px;

      &:first-of-type {
        margin-top: 0;
      }
    }
  }
`
