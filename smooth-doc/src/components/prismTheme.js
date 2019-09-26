import { th } from '@xstyled/system'

const light = {
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'rgb(162, 191, 252)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted', 'attr-name'],
      style: {
        color: 'rgb(72, 118, 214)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(152, 159, 177)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'builtin', 'char', 'constant', 'url'],
      style: {
        color: 'rgb(72, 118, 214)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(201, 103, 101)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(170, 9, 130)',
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ['punctuation'],
      style: {
        color: 'rgb(153, 76, 195)',
      },
    },
    {
      types: ['function', 'selector', 'doctype'],
      style: {
        color: 'rgb(153, 76, 195)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(17, 17, 17)',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'rgb(153, 76, 195)',
      },
    },
    {
      types: ['operator', 'property', 'keyword', 'namespace'],
      style: {
        color: 'rgb(12, 150, 155)',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'rgb(188, 84, 84)',
      },
    },
  ],
}

const dark = {
  styles: [
    {
      types: ['variable', 'constant', 'deleted'],
      style: {
        color: 'rgb(224, 108, 117)',
      },
    },
    {
      types: ['punctuation', 'char', 'number'],
      style: {
        color: 'rgb(209, 154, 102)',
      },
    },
    {
      types: ['builtin', 'changed', 'namespace', 'class-name', 'tag'],
      style: {
        color: 'rgb(229, 192, 123)',
      },
    },
    {
      types: ['operator'],
      style: {
        color: 'rgb(171, 178, 191)',
      },
    },
    {
      types: ['inserted', 'string'],
      style: {
        color: 'rgb(152, 195, 121)',
      },
    },
    {
      types: ['attr-name', 'comment'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(97, 175, 239)',
      },
    },
    {
      types: ['keyword', 'selector'],
      style: {
        color: 'rgb(198, 120, 221)',
      },
    },
    {
      types: ['symbol'],
      style: {
        color: 'rgb(86, 182, 194)',
      },
    },
  ],
}

const modeThemes = { light, dark }

export default function getPrismTheme({ theme, mode }) {
  const p = { theme }
  return {
    plain: {
      color: th.color('editor-text')(p),
      backgroundColor: th.color('editor-bg')(p),
    },
    ...modeThemes[mode],
  }
}
