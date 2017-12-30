const logger = require('../config/logger');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Land = mongoose.model('land');

module.exports = app => {
  app.get('/api/land', requireLogin, async (req, res) => {
    const l = await Land.find({ _user: req.user.id }).sort({createdAt: 'desc'}).select();
    res.send(l);
  });

  app.post('/api/land', requireLogin, async (req, res) => {
    logger.debug(req.body);
    const { title, x, y, district, category, description, adult } = req.body;

    const land = new Land({
      title,
      x,
      y,
      district,
      description,
      category,
      adult,
      _user: req.user.id,
    });

    try {
      const l = await land.save();
      res.send(l);
    } catch (err) {
      logger.error(err);
      res.status(422).send(err);
    }
  });

  app.get('/api/land/:landId', requireLogin, async (req, res) => {
    const land = await Land.find({ _user: req.user.id, _id: req.params.landId }).select();
    res.send(land);
  });

  app.get('/api/land/category/:categoryId', requireLogin, async (req, res) => {
    const land = await Land.find({ category: req.params.categoryId }).select();
    res.send(land);
  });

};
