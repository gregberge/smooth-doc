exports.getGatsbyConfig = function getGatsbyConfig({
  root,
  name,
  slug,
  github,
  menu = [],
  nav = [
    {
      title: 'Usage',
      url: '/docs/',
    },
  ],
}) {
  return {
    siteMetadata: {
      title: name,
      github,
      menu,
      nav,
    },
    pathPrefix: `/open-source/${slug}`,
    plugins: [
      // Relative import
      'gatsby-plugin-resolve-src', // Styled components
      'gatsby-plugin-styled-components', // Helmet
      'gatsby-plugin-react-helmet', // Offline
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name,
          short_name: slug,
          start_url: '/',
          background_color: '#bd4932',
          theme_color: '#bd4932',
          display: 'minimal-ui',
        },
      }, // Pages
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: `${root}/src/pages`,
          ignore: [`**/docs/**`],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'docs',
          path: `${root}/src/pages/docs`,
        },
      },
      {
        resolve: require.resolve('./plugins/gatsby-remark-autolink-headers'),
      },
      {
        resolve: 'gatsby-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./layouts/default'),
            docs: require.resolve('./layouts/docs'),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: require.resolve(
                './plugins/gatsby-remark-autolink-headers',
              ),
            },
            {
              resolve: 'gatsby-remark-highlights',
              options: {
                scopePrefix: 'syntax--',
              },
            },
          ],
        },
      }, // Images
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${root}/src/images`,
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp', // Fonts
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          custom: {
            families: ['Colfax'],
            url: 'https://www.smooth-code.com/assets/fonts.css',
          },
        },
      }, // Redirect
      'gatsby-plugin-meta-redirect', // Robots
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          sitemap: null,
          host: null,
          policy: [
            {
              userAgent: '*',
              disallow: '/',
            },
          ],
        },
      }, // Analytics
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: 'UA-101358560-1',
        },
      },
    ],
  }
}
