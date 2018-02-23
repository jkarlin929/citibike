const axios = require('axios');
const bikeController = {};

bikeController.index = (req,res) => {
axios({
  method: 'get',
  url: 'https://feeds.citibikenyc.com/stations/stations.json'
}).then(data => {
  // console.log(data.data.stationBeanList)
  res.render('bikes/index', {
    bikes: data.data.stationBeanList
  })
}).catch(err => {
  console.log(err)
  })
}


module.exports = bikeController