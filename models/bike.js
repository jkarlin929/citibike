const db = require('../db/config');

const Bike = {};

Bike.findAll = () => {
  return db.query('SELECT * FROM favorite_locations ORDER BY id ASC');
};

Bike.findById = id => {
  return db.oneOrNone(`SELECT * FROM favorite_locations WHERE id = $1`, [id]);
};

Bike.update = (bike, id) => {
  return db.none(
    `
    UPDATE favorite_locations SET
    intersection = $1,
    rating = $2
    WHERE id = $3
    `,
    [bike.intersection, bike.rating, id]
  );
};

Bike.create = bike => {
  return db.one(
    `
      INSERT INTO favorite_locations
      (intersection, rating)
      VALUES ($1, $2) RETURNING *
    `,
    [bike.intersection, bike.rating]
  );
};

Bike.destroy = id => {
  return db.none(
    `
    DELETE FROM favorite_locations
    WHERE id = $1
    `,
    [id]
  );
};


module.exports = Bike;