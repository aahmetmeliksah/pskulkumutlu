const path = require('path')

module.exports = {
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
    store: 'pack',
    compression: 'gzip',
    maxAge: 604800000,
    infrastructureLogging: {
      debug: { '/PackFileCache/': true },
    },
  },
}
