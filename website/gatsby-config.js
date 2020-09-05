const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Smooth DOC',
        siteUrl: 'https://smooth-doc.com',
        description: 'Ready to use documentation theme for Gatsby.',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Greg Bergé',
        sections: ['About', 'Guide', 'Components', 'Reference'],
        sitemap: {
          exclude: ['/thanks/'],
        },
        licenseKey: '10E9A447-D9E04BB6-83765C8F-8A1483B4',
      },
    },
  ],
}
