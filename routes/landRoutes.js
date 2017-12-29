const logger = require('../config/logger');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Land = mongoose.model('land');

module.exports = app => {
  app.get('/api/land', requireLogin, async (req, res) => {
    const l = await Land.find({ _user: req.user.id }).select();
    res.send(l);
  });

  app.post('/api/land', requireLogin, async (req, res) => {
    logger.debug(req.body);
    const { project, symbol, investment, transactionID } = req.body;

    const l = new Land({
      title,
      x,
      y,
      district,
      description,
      adult,
      _user: req.user.id,
    });

    try {
      await l.save();
      res.send();
    } catch (err) {
      res.status(422).send(err);
    }
  });

};
