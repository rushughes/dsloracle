// keys.js - figure out what set of credentials to return depending on
// environment

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
