var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage

app.use(express.static('static'));

app.listen(3000, function () {
  console.log('Running on http://localhost:3000 !');
});
