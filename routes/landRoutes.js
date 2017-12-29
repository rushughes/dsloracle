const logger = require('../config/logger');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const land = mongoose.model('land');

module.exports = app => {
  app.get('/api/land', requireLogin, async (req, res) => {
    const icos = await ICO.find({ _user: req.user.id }).select();
    res.send(icos);
  });
};
