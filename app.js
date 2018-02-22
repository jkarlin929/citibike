const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Friend');
});

app.listen(PORT, () => {
  console.log(`It is Alive! port ${PORT}`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const bikeRouter = require('./routes/bike-routes');

app.use('/bike', bikeRouter)

