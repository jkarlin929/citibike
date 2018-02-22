const express = require('express');
const bikeController = require('../controllers/bike-controller');
const bikeRouter = express.Router();

bikeRouter.get('/', bikeController.index)

module.exports = bikeRouter;