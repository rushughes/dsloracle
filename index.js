const logger = require('./config/logger');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Land');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

logger.debug('Overriding Express logger');
app.use(morgan('combined', { stream: logger.stream }));

app.use(bodyParser({limit: '3mb'}));

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/landRoutes')(app);

if (process.env.NODE_ENV == 'production') {
  // express will serve up static production assets
  // main.js main.css etc
  app.use(express.static('client/build'));

  // express will serve up the index.html if it does
  // not recognise the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  logger.info('Listening on port:', PORT);
});
