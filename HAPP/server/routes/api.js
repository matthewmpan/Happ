const express = require('express');
const happController = require('../controllers/happController.js');
const router = express.Router();

// router.get('/signin',
//   happController.getUser,
//   (req, res) => res.status(200).json(res.locals.user)
// );

// router.post('/signup',
//   happController.addUser,
//   (req, res) => res.status(200).json({})
// );

router.get('/happy',
  happController.getHappy,
  (req, res) => res.status(200).json(res.locals.restaurants)
);

router.post('/addRestaurant',
  happController.addRestaurant,
  (req, res) => res.status(200).json(res.locals.newRestaurant)
);

router.delete('/:id',
  happController.deleteRestaurant,
  happController.getHappy,
  (req, res) => res.status(200).json(res.locals.restaurants)
);

module.exports = router;