'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');

const endpoint = 'https://www.googleapis.com/customsearch/v1?key=' + process.env.API_KEY 
  + '&cx=' + process.env.CX_KEY + '&q='


//api/imagesearch
router.get('/', function(req, res){
  res.send(JSON.stringify({}));
});

router.get('/:searchterm', function(req, res){
  let searchTerm = req.params.searchterm.split(' ').join('+');  
  let offset = req.query.offset;
  
  request(endpoint + searchTerm, function(err, data){
    res.send(data);
  });

});

module.exports = router;