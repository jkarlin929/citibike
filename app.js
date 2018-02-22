const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Friend');
});

app.listen(PORT, () => {
  console.log(`It is Alive! port ${PORT}`);
});

