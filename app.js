'use strict';
const express = require('express');
const app = express();
const path = require('path');

const index = require('./lib/routes/index.js');
const recent = require('./lib/routes/recent.js');
const search = require('./lib/routes/search.js');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'lib/views/'));

app.use('/', index);
app.use('/api/recent', recent)
app.use('/api/imagesearch', search);


app.listen(process.env.PORT || 3000, function(){
  let port = process.env.PORT || 3000;
  console.log('app listening on port', port);
});