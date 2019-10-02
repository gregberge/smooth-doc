module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        standalone: false,
        name: 'Loadable Components',
        slug: 'loadable-components',
        author: 'Greg Bergé',
        description: 'The recommended Code Splitting library for React.',
        siteUrl: 'https://www.smooth-code.com/open-source/loadable-components',
        github: 'https://github.com/smooth-code/loadable-components',
        menu: ['Introduction', 'Guides', 'API'],
        nav: [{ title: 'Docs', url: '/docs/' }],
        codeFundProperty: 268,
        theme: {
          colors: {
            primary: 'violet',
          },
          useCustomProperties: false,
        },
        algoliaDocSearch: {
          apiKey: '9a5b8a758fdc63c340972ae48583c2f9',
          indexName: 'smooth-code-xstyled',
        },
      },
    },
  ],
}
