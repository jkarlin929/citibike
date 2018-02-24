const express = require('express');
const bikeController = require('../controllers/bike-controller');
const bikeRouter = express.Router();

bikeRouter.get('/', bikeController.index);
bikeRouter.get('/new', bikeController.new);
bikeRouter.get('/:id', bikeController.show);
bikeRouter.get('/:id/edit', bikeController.edit);
bikeRouter.put('/:id', bikeController.update);
bikeRouter.post('/', bikeController.create);
bikeRouter.delete('/:id', bikeController.destroy);

module.exports = bikeRouter;