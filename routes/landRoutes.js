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
    /*
    [0] debug:  title=assdfdsf, x=123, y=123123, files=[preview=blob:http://localhost:3000/bed3762e-a4de-4d19-8039-97cebaaca5c1], description=sdfsdfsdf, category=castles, district=SUREAL District
[0] debug: files preview=blob:http://localhost:3000/bed3762e-a4de-4d19-8039-97cebaaca5c1
    */

    const { title, x, y, files, images, district, category, description, adult } = req.body;
    logger.debug('files', files);
    imageURL='placeholder';
    const land = new Land({
      title,
      x,
      y,
      imageURL,
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
