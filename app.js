const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const bikeRouter = require('./routes/bike-routes');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/bike', bikeRouter)

app.get('/', (req, res) => {
  res.render('bikes/home');
});

app.listen(PORT, () => {
  console.log(`It is Alive! port ${PORT}`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('*', (req, res) => {
  res.status(404).send('Where is your bike? Not here.');
})


