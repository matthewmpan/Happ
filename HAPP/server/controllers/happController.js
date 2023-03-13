const models = require('../models/happModels');

const happController = {};

happController.getUser = (req, res, next) => {
  models.User.find()
    .then((data) => {
      //console.log('data', data[0]);
      res.locals.user = data;
      next();
    })
    .catch(err => {
      console.log('err', err);
      next({
        log: 'error in getUser',
        message: { err: 'error in getUser'}
      });
    });
};

happController.addUser = (req, res, next) => {
  models.User.create(req.body)
    .then(data => {
      next();
    })
    .catch((err) => {
      console.log('err', err);
      next({
        log: 'error in addUser',
        message: { err: 'error in addUser'}
      });
    });
};

happController.getHappy = (req, res, next) => {
  // models.Restaurant.find({ _id: req.query.id })
  models.Restaurant.find()
    .then((data) => {
      //console.log('data', data);
      res.locals.restaurants = data;
      next();
    })
    .catch((err) => {
      console.log('err', err);
      next({
        log: 'error in getHappy',
        message: { err: 'error in getHappy'}
      });
    });
};

happController.addRestaurant = (req, res, next) => {
  models.Restaurant.create(req.body)
    .then(data => {
      res.locals.newRestaurant = data;
      next();
    })
    .catch((err) => {
      console.log('err', err);
      next({
        log: 'error in addRestaurant',
        message: { err: 'error in addRestaurant'}
      });
    });
};

happController.deleteRestaurant = (req, res, next) => {
  const { id } = req.params;
  models.Restaurant.deleteOne({ _id: id })
    .then(data => {
      res.locals.deleted = data;
      next();
    })
    .catch((err) => {
      console.log('err', err);
      next({
        log: 'error in deleteRestaurant',
        message: { err: 'error in deleteRestaurant'}
      });
    });
};

module.exports = happController;