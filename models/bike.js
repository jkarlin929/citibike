const db = require('../db/config');

const Bike = {};

Bike.findAll = () => {
  return db.query('SELECT * FROM favorite_locations ORDER BY id ASC');
};

module.exports = Bike;