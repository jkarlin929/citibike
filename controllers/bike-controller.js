const axios = require('axios');
const Bike = require('../models/bike');
const bikeController = {};

bikeController.index = (req,res) => {
  Bike.findAll()
  .then(bike => {
axios({
  method: 'get',
  url: 'https://feeds.citibikenyc.com/stations/stations.json'
}).then(data => {
    res.render('bikes/index', {
    bikesData: data.data.stationBeanList,
    bikes: bike
    })
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
    }).catch(err => {
      res.status(400).json(err);
    });
  })
}

bikeController.edit = (req, res) => {
  axios({
  method: 'get',
  url: 'https://feeds.citibikenyc.com/stations/stations.json'
}).then(data => {
  console.log('this is edit data', data)
  Bike.findById(req.params.id)
  .then(bike => {
    res.render('bikes/edit', {
      bikes: bike,
      data: data.data.stationBeanList
    }).catch(err => {
      res.status(400).json(err);
    })
  })
})
}

bikeController.update = (req, res) => {
  axios({
    method: 'get',
    url: 'https://feeds.citibikenyc.com/stations/stations.json'
  }).then(data => {
    // console.log('this is update data', data.data)
    // console.log('intersection', req.body)
  Bike.update({
    intersection: req.body.intersection,
    rating: req.body.rating
  }, req.params.id)
  .then(() => {
    res.redirect(`/bike/${req.params.id}`)
  })
    .catch(err => {
    res.status(400).json(err);
  });
  });
};

bikeController.new = (req, res) => {
  axios({
  method: 'get',
  url: 'https://feeds.citibikenyc.com/stations/stations.json'
}).then(data => {
  // console.log('found stuff', data.data)
  Bike.findAll()
  .then(bike => {
    console.log('this is bike', bike)
    res.render('bikes/new', {
      bikes: bike,
      data: data.data.stationBeanList
    })
}).catch(err => {
      res.status(400).json(err)
    });
  });
};

bikeController.create = (req, res) => {
  Bike.create({
    intersection: req.body.intersection,
    rating: req.body.rating
  })
  .then(bike => {
    // console.log('this is bike id', bike.id)
    res.redirect(`/bike/${bike.id}`)
  }).catch(err => {
    res.status(400).json(err);
  });
};

bikeController.destroy = (req, res) => {
  Bike.destroy(req.params.id)
    .then(() => {
      res.redirect('/bike')
    }).catch(err => {
      res.status(400).json(err);
    });
};

module.exports = bikeController;