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


module.exports = bikeController;