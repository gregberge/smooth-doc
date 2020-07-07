const fs = require('fs')

function createDirectoryIfNotExists({ reporter }, pathname) {
  if (!fs.existsSync(pathname)) {
    reporter.info(`creating the ${pathname} directory`)
    fs.mkdirSync(pathname)
  }
}

// Make sure the data directory exists
exports.onPreBootstrap = (options) => {
  // Create all required directories
  createDirectoryIfNotExists(options, 'src')
  createDirectoryIfNotExists(options, 'src/pages')
  createDirectoryIfNotExists(options, 'src/pages/docs')
  createDirectoryIfNotExists(options, 'src/images')
}
