if (process.env.NODE_ENV === 'production') {
  module.exports = require('./logger-prod');
} else {
  module.exports = require('./logger-dev');
}
