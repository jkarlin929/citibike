const axios = require('axios');
const Bike = require('../models/bike');
const bikeController = {};

bikeController.index = (req,res) => {
axios({
  method: 'get',
  url: 'https://feeds.citibikenyc.com/stations/stations.json'
}).then(data => {
  res.render('bikes/index', {
    bikes: data.data.stationBeanList
  })
}).catch(err => {
  res.status(400).json(err);
  });
};

bikeController.show = (req, res) => {
  Bike.findById(req.params.id)
  .then(bike => {
    res.render('bikes/show', {
      bikes: bike
    })
    .catch(err => {
      res.status(400).json(err);
    });
  })
}

bikeController.edit = (req, res) => {
  Bike.findById(req.params.id)
  .then(bike => {
    res.render('bikes/edit', {
      bikes: bike
    })
    .catch(err => {
      res.status(400).json(err);
    })
  })
}

bikeController.update = (req, res) => {
  Bike.update({
    intersection: req.body.intersection,
    rating: req.body.rating
  }, req.params.id)
  .then(() => {
    res.redirect(`bike/${req.params.id}`)
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

bikeController.new = (req, res) => {
  res.render('bikes/new')
};

bikeController.create = (req, res) => {
  Bike.create({
    intersection: req.body.intersection,
    rating: req.body.rating
  })
  .then(bike => {
    res.redirect(`/bike/${bikes.id}`)
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

bikeController.destroy = (req, res) => {
  Bike.destroy(req.params.id)
    .then(() => {
      res.redirect('/bike')
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = bikeController;