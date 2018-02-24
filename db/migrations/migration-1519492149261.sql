CREATE TABLE IF NOT EXISTS favorite_locations (
  id BIGSERIAL PRIMARY KEY,
  intersection VARCHAR(255),
  rating VARCHAR(255)
);