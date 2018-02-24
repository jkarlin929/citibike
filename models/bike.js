const db = require('../db/config');

const Bike = {};

Bike.findAll = () => {
  return db.query('SELECT * FROM favorite_locations ORDER BY id ASC');
};

Bike.findById = id => {
  return db.oneOrNone(`SELECT * FROM favorite_locations WHERE id = $1`, [id]);
};

module.exports = Bike;