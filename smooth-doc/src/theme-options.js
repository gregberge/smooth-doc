function getSiteURL(themeOptions) {
  if (process.env.NETLIFY !== 'true')
    return themeOptions.siteURL || 'http://localhost:8000/'
  if (process.env.NETLIFY_ENV === 'production') return process.env.URL
  return process.env.DEPLOY_PRIME_URL
}

exports.getSiteURL = getSiteURL
