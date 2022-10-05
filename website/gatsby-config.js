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
        navItems: [{ title: 'Docs', url: '/docs/' }],
        twitterAccount: 'neoziro',
        githubRepositoryURL: 'https://github.com/gregberge/smooth-doc/',
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          appId: 'J2LYQ9877O',
          apiKey: '9295224c1474afa9f75f7d4772a1f713',
          indexName: 'smooth-doc',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-154496255-5',
      },
    },
  ],
}
