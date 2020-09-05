const fs = require('fs')
const { getSiteUrl } = require('./src/theme-options')

function getLogoPath() {
  return fs.existsSync('images/logo-manifest.png')
    ? 'images/logo-manifest.png'
    : `${__dirname}/images/logo-manifest.png`
}

function getOptions(themeOptions) {
  if (!themeOptions.licenseKey) {
    return {
      name: 'Smooth DOC',
      description: '',
    }
  }
  return themeOptions
}

/**
 * Theme configuration.
 * @param {object} themeOptions
 * @param {string} themeOptions.name
 * @param {string} themeOptions.description
 * @param {string} [themeOptions.siteUrl]
 * @param {string} [themeOptions.shortName]
 * @param {string[]} [themeOptions.sections]
 * @param {{ title: string, url: string }[]} [themeOptions.nav]
 * @param {string} [themeOptions.baseDirectory]
 * @param {string} [themeOptions.twitterAccount]
 * @param {string} [themeOptions.githubRepositoryURL]
 * @param {string} [themeOptions.githubDocRepositoryURL]
 * @param {string} [themeOptions.githubDefaultBranch]
 * @param {string} [themeOptions.author]
 * @param {string} [themeOptions.carbonAdsURL]
 * @param {{ apiKey: string, indexName: string }} [themeOptions.docSearch]
 * @param {object} [themeOptions.sitemap]
 */
module.exports = (themeOptions) => {
  const options = getOptions(themeOptions)
  const siteUrl = getSiteUrl(options)
  const logoPath = getLogoPath()

  return {
    siteMetadata: {
      title: options.name,
      githubRepositoryURL: options.githubRepositoryURL,
      sections: options.sections,
      navItems: options.navItems,
      carbonAdsURL: options.carbonAdsURL,
      description: options.description,
      siteUrl,
      author: options.author,
      docSearch: options.docSearch,
    },
    plugins: [
      // Build
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: ['smooth-doc'],
        },
      },
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: require.resolve(
                './src/plugins/gatsby-remark-autolink-headers',
              ),
            },
          ],
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-react-helmet',
      {
        resolve: require.resolve(
          './src/plugins/gatsby-remark-autolink-headers',
        ),
      },

      // Source
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/pages`,
          name: 'page',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/images`,
          name: 'image',
        },
      },
      ...(options.licenseKey
        ? [
            {
              resolve: 'gatsby-source-filesystem',
              options: {
                path: `./pages`,
                name: 'page',
              },
            },
            {
              resolve: 'gatsby-source-filesystem',
              options: {
                path: `./images`,
                name: 'image',
              },
            },
          ]
        : [
            {
              resolve: 'gatsby-source-filesystem',
              options: {
                path: `${__dirname}/preview-pages`,
                name: 'page',
              },
            },
          ]),
      // SEO
      {
        resolve: 'gatsby-plugin-sitemap',
        options: themeOptions.sitemap || {},
      },
      'gatsby-plugin-meta-redirect',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: options.name,
          short_name: options.name || options.shortName,
          start_url: '/',
          display: 'minimal-ui',
          icon: logoPath,
        },
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          resolveEnv: () => process.env.NETLIFY_ENV || process.env.NODE_ENV,
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
    ],
  }
}
