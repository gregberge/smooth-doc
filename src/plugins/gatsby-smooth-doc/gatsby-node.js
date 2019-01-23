const path = require('path')
const fs = require('fs-extra')

exports.onCreateWebpackConfig = function onCreateWebpackConfig({
  actions,
  loaders,
  getConfig,
}) {
  const config = getConfig()

  config.module.rules = [
    // Omit the default rule where test === '\.jsx?$'
    ...config.module.rules.filter(
      rule => String(rule.test) !== String(/\.jsx?$/),
    ),

    // Recreate it with custom exclude filter
    {
      // Called without any arguments, `loaders.js` will return an
      // object like:
      // {
      //   options: undefined,
      //   loader: '/path/to/node_modules/gatsby/dist/utils/babel-loader.js',
      // }
      // Unless you're replacing Babel with a different transpiler, you probably
      // want this so that Gatsby will apply its required Babel
      // presets/plugins.  This will also merge in your configuration from
      // `babel.config.js`.
      ...loaders.js(),

      test: /\.jsx?$/,

      // Exclude all node_modules from transpilation, except for 'smooth-doc'
      exclude: modulePath =>
        /node_modules/.test(modulePath) &&
        !/node_modules\/(smooth-doc)/.test(modulePath),
    },
  ]

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config)
}

exports.onPreExtractQueries = async function onPreExtractQueries(
  { store },
  { root },
) {
  const { program } = store.getState()

  // We have both gatsby-image installed as well as ImageSharp nodes so let's
  // add our fragments to .cache/fragments.
  await fs.copy(
    path.join(root, 'node_modules/smooth-doc/lib'),
    `${program.directory}/.cache/fragments/smooth-doc`,
  )
}
