export default {
  plain: {
    color: '#abb2bf',
    backgroundColor: '#282c34',
  },
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
