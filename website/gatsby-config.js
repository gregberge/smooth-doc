const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Smooth DOC',
        siteURL: 'https://smooth-doc.dev',
        description: 'Ready to use documentation theme for Gatsby.',
        githubRepositoryURL: 'https://github.com/gregberge/smooth-doc',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Greg Bergé',
        sections: ['About', 'Guide', 'Components', 'Reference'],
        licenseKey: '10E9A447-D9E04BB6-83765C8F-8A1483B4',
      },
    },
  ],
}
