import { transparentize, normalize } from 'polished'
import { css, th } from '@xstyled/styled-components'

export function primaryColor(color) {
  return {
    'primary-50': th.color(`${color}-50`),
    'primary-100': th.color(`${color}-100`),
    'primary-200': th.color(`${color}-200`),
    'primary-300': th.color(`${color}-300`),
    'primary-400': th.color(`${color}-400`),
    'primary-500': th.color(`${color}-500`),
    'primary-600': th.color(`${color}-600`),
    'primary-700': th.color(`${color}-700`),
    'primary-800': th.color(`${color}-800`),
    'primary-900': th.color(`${color}-900`),
  }
}

export const theme = {
  initialColorModeName: 'light',
  global: css`
    ${normalize()}

    * {
      box-sizing: border-box;
    }

    html,
    body {
      transition: 300ms ease-in color, 300ms ease-in background-color;
      margin: 0;
      font-family: base;
      background-color: background;
      color: on-background;
      line-height: base;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :focus {
      outline-color: primary;
    }
  `,
  'prism-theme': () => ({
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
  }),
  fonts: {
    base:
      '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  lineHeights: {
    base: 1.4,
    control: th.lineHeight('base'),
  },
  transitions: {
    base: '300ms ease all',
    fast: '150ms cubic-bezier(0.215, 0.61, 0.355, 1) all',
    control: th.transition('base'),
  },
  radii: {
    base: 4,
    control: th.radius('base'),
    editor: th.radius('base'),
    blockquote: th.radius('base'),
  },
  borderWidths: {
    base: 1,
    control: th.borderWidth('base'),
  },
  shadows: {
    focus: (p) => `0 0 0 ${th.px(2)(p)} ${th.color('primary-a500')(p)}`,
    'control-focus': th.shadow('focus'),
  },
  sizes: {
    screen: 1440,
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 48,
    6: 96,
    7: 144,
    8: 192,
    9: 240,
    'preview-padding-y': 16,
    'preview-padding-x': 24,
  },
  colors: {
    black: '#000',
    white: '#fff',

    'grey-100': '#F7FAFC',
    'grey-200': '#EDF2F7',
    'grey-300': '#E2E8F0',
    'grey-400': '#CBD5E0',
    'grey-500': '#A0AEC0',
    'grey-600': '#718096',
    'grey-700': '#4A5568',
    'grey-800': '#2D3748',
    'grey-900': '#1A202C',
    grey: th.color('grey-500'),

    'red-100': '#FFF5F5',
    'red-200': '#FED7D7',
    'red-300': '#FEB2B2',
    'red-400': '#FC8181',
    'red-500': '#F56565',
    'red-600': '#E53E3E',
    'red-700': '#C53030',
    'red-800': '#9B2C2C',
    'red-900': '#742A2A',
    red: th.color('red-500'),

    'orange-100': '#FFFAF0',
    'orange-200': '#FEEBC8',
    'orange-300': '#FBD38D',
    'orange-400': '#F6AD55',
    'orange-500': '#ED8936',
    'orange-600': '#DD6B20',
    'orange-700': '#C05621',
    'orange-800': '#9C4221',
    'orange-900': '#7B341E',
    orange: th.color('orange-500'),

    'yellow-100': '#FFFFF0',
    'yellow-200': '#FEFCBF',
    'yellow-300': '#FAF089',
    'yellow-400': '#F6E05E',
    'yellow-500': '#ECC94B',
    'yellow-600': '#D69E2E',
    'yellow-700': '#B7791F',
    'yellow-800': '#975A16',
    'yellow-900': '#744210',
    yellow: th.color('yellow-500'),

    'green-100': '#F0FFF4',
    'green-200': '#C6F6D5',
    'green-300': '#9AE6B4',
    'green-400': '#68D391',
    'green-500': '#48BB78',
    'green-600': '#38A169',
    'green-700': '#2F855A',
    'green-800': '#276749',
    'green-900': '#22543D',
    green: th.color('green-500'),

    'teal-100': '#E6FFFA',
    'teal-200': '#B2F5EA',
    'teal-300': '#81E6D9',
    'teal-400': '#4FD1C5',
    'teal-500': '#38B2AC',
    'teal-600': '#319795',
    'teal-700': '#2C7A7B',
    'teal-800': '#285E61',
    'teal-900': '#234E52',
    teal: th.color('teal-500'),

    'blue-50': '#ebf5ff',
    'blue-100': '#e1effe',
    'blue-200': '#c3ddfd',
    'blue-300': '#a4cafe',
    'blue-400': '#76a9fa',
    'blue-500': '#3f83f8',
    'blue-600': '#1c64f2',
    'blue-700': '#1a56db',
    'blue-800': '#1e429f',
    'blue-900': '#233876',
    blue: th.color('blue-500'),

    'indigo-100': '#EBF4FF',
    'indigo-200': '#C3DAFE',
    'indigo-300': '#A3BFFA',
    'indigo-400': '#7F9CF5',
    'indigo-500': '#667EEA',
    'indigo-600': '#5A67D8',
    'indigo-700': '#4C51BF',
    'indigo-800': '#434190',
    'indigo-900': '#3C366B',
    indigo: th.color('indigo-500'),

    'purple-50': '#f6f5ff',
    'purple-100': '#edebfe',
    'purple-200': '#dcd7fe',
    'purple-300': '#cabffd',
    'purple-400': '#ac94fa',
    'purple-500': '#9061f9',
    'purple-600': '#7e3af2',
    'purple-700': '#6c2bd9',
    'purple-800': '#5521b5',
    'purple-900': '#4a1d96',
    purple: th.color('purple-500'),

    'pink-50': '#fdf2f8',
    'pink-100': '#fce8f3',
    'pink-200': '#fad1e8',
    'pink-300': '#f8b4d9',
    'pink-400': '#f17eb8',
    'pink-500': '#e74694',
    'pink-600': '#d61f69',
    'pink-700': '#bf125d',
    'pink-800': '#99154b',
    'pink-900': '#751a3d',
    pink: th.color('pink-500'),

    // Primary = indigo
    ...primaryColor('indigo'),

    primary: th.color('primary-500'),
    'primary-a500': (p) => transparentize(0.5, th.color('primary')(p)),

    background: th.color('white'),
    'background-light': th.color('grey-100'),
    'background-primary': th.color('primary-100'),
    'background-mark': th.color('yellow-200'),
    'background-light-a50': (p) =>
      transparentize(0.05, th.color('background-light')(p)),
    'on-background': th.color('black'),
    'on-background-light': th.color('grey-700'),
    'on-background-primary': th.color('primary-700'),
    'on-background-primary-dark': th.color('primary-800'),

    'layout-border': th.color('grey-300'),

    'control-background': th.color('grey-100'),
    'control-placeholder': th.color('grey-600'),
    'control-on': th.color('grey-900'),
    'control-border': th.color('layout-border'),
    'control-border-hover': th.color('grey-500'),
    'control-border-active': th.color('primary-400'),

    'editor-background': th.color('grey-900'),
    'editor-on': th.color('grey-100'),
    'editor-border': th.color('layout-border'),

    'blockquote-link': th.color('yellow-800'),
    'blockquote-background': th.color('yellow-200'),
    'blockquote-border': th.color('yellow'),

    'doc-search-suggestion-highlight-background': th.color('primary-200'),
    'doc-search-suggestion-highlight-on-background': th.color('primary-800'),
    'doc-search-suggestion-content-background': th.color('primary-100'),
    'doc-search-suggestion-content-underline': th.color('primary-700'),

    modes: {
      dark: {
        background: th.color('grey-900'),
        'editor-background': th.color('black'),
        'background-light': th.color('grey-800'),
        'background-primary': th.color('primary-900'),
        'background-mark': th.color('yellow-500'),
        'background-light-a50': (p) =>
          transparentize(0.05, th.color('background-light')(p)),
        'on-background': th.color('white'),
        'on-background-light': th.color('grey-300'),
        'on-background-primary': th.color('primary-300'),
        'on-background-primary-dark': th.color('primary-200'),

        'layout-border': th.color('grey-700'),

        'control-background': th.color('grey-800'),
        'control-placeholder': th.color('grey-400'),
        'control-on': th.color('grey-100'),
        'control-border': th.color('layout-border'),
        'control-border-hover': th.color('grey-500'),
        'control-border-active': th.color('primary-600'),

        'blockquote-link': th.color('yellow-200'),
        'blockquote-background': th.color('yellow-900'),
        'blockquote-border': th.color('yellow-300'),

        'doc-search-suggestion-highlight-background': th.color('primary-800'),
        'doc-search-suggestion-highlight-on-background': th.color(
          'primary-200',
        ),
        'doc-search-suggestion-content-background': th.color('primary-900'),
        'doc-search-suggestion-content-underline': th.color('primary-300'),
      },
    },
  },
}
