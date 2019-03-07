const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: 'serverless',
  env: {
    api_base: 'https://search.dataone.org/cn/v2/',
    debounce: 300
  }
});
