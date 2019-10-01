module.exports = function config({
  name = 'Smooth Doc Theme',
  slug = 'smooth-doc',
  github = 'https://github.com/smooth-code/smooth-doc',
  description = '',
  siteUrl = '',
  author = '',
  menu = ['Usage'],
  nav = [{ title: 'Usage', url: '/docs/getting-started/' }],
  codeFundProperty = 268,
  standalone = false,
} = {}) {
  return {
    siteMetadata: {
      title: name,
      github,
      menu,
      nav,
      codeFundProperty,
      description,
      siteUrl,
      author,
      standalone,
    },
    pathPrefix: `/open-source/${slug}`,
    plugins: [
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: ['smooth-doc'],
        },
      },
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
          background_color: '#bd4932',
          theme_color: '#bd4932',
          display: 'minimal-ui',
          icon: 'src/images/logo.png',
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
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `./src/images`,
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
      },
      'gatsby-plugin-meta-redirect',
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
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: 'UA-101358560-1',
        },
      },
    ],
  }
}
