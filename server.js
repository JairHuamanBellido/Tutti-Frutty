const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile('dist/index.html',{root: __dirname});
});

app.listen(port);