const fs = require('fs')

module.exports = function config({
  name = 'Smooth Doc Theme',
  slug = 'smooth-doc',
  github = 'https://github.com/smooth-code/smooth-doc',
  description = 'Ready to use documentation theme for Gatsby.',
  siteUrl: optionSiteUrl = 'https://smooth-doc.com',
  author = 'Greg Bergé',
  menu = ['Usage'],
  nav = [{ title: 'Usage', url: '/docs/getting-started/' }],
  carbonAdUrl = '',
  theme: { colors: { primary = '#bd4932' } = {} } = {},
  googleAnalytics = '',
  algoliaDocSearch = { apiKey: '', indexName: '' },
} = {}) {
  const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = optionSiteUrl,
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
  } = process.env
  const isNetlifyProduction = NETLIFY_ENV === 'production'
  const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

  return {
    siteMetadata: {
      title: name,
      github,
      menu,
      nav,
      carbonAdUrl,
      description,
      siteUrl,
      author,
      algoliaDocSearch: {
        enabled: Boolean(algoliaDocSearch.apiKey),
        ...algoliaDocSearch,
      },
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: ['smooth-doc'],
        },
      },
      'gatsby-plugin-sitemap',
      'gatsby-plugin-resolve-src',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/layouts/default'),
            docs: require.resolve('./src/layouts/docs'),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: require.resolve(
                './src/plugins/gatsby-remark-autolink-headers',
              ),
            },
          ],
        },
      },
      {
        resolve: require.resolve(
          './src/plugins/gatsby-remark-autolink-headers',
        ),
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name,
          short_name: slug,
          start_url: '/',
          background_color: primary,
          theme_color: primary,
          display: 'minimal-ui',
          icon: fs.existsSync('src/images/logo.png')
            ? 'src/images/logo.png'
            : `${__dirname}/src/images/logo.png`,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: `${__dirname}/src/pages`,
          ignore: [`**/docs/**`],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'docs',
          path: `${__dirname}/src/pages/docs`,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `./src/images`,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: `./src/pages`,
          ignore: [`**/docs/**`],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'docs',
          path: `./src/pages/docs`,
        },
      },
      {
        resolve: require.resolve(
          './src/plugins/gatsby-remark-autolink-headers',
        ),
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-meta-redirect',
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          resolveEnv: () => NETLIFY_ENV,
          env: {
            production: {
              policy: [{ userAgent: '*' }],
            },
            'branch-deploy': {
              policy: [{ userAgent: '*', disallow: ['/'] }],
              sitemap: null,
              host: null,
            },
            'deploy-preview': {
              policy: [{ userAgent: '*', disallow: ['/'] }],
              sitemap: null,
              host: null,
            },
          },
        },
      },
      ...(googleAnalytics
        ? [
            {
              resolve: `gatsby-plugin-google-analytics`,
              options: {
                trackingId: googleAnalytics,
              },
            },
          ]
        : []),
    ],
  }
}
