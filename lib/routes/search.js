'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');

const endpoint = 'https://www.googleapis.com/customsearch/v1?key=' + process.env.API_KEY 
  + '&cx=' + process.env.CX_KEY + '&num=10&searchType=image' + '&q='


//api/imagesearch
router.get('/', function(req, res){
  res.send(JSON.stringify({}));
});

router.get('/:searchterm', function(req, res){
  let searchTerm = req.params.searchterm.split(' ').join('+');  
  let offset = req.query.offset;
  
  request(endpoint + searchTerm, function(err, data){
    let results = JSON.parse(data.body).items;
    let formatted = results.map(function(imgObj){
      return {title: imgObj.title, url: imgObj.link, site: imgObj.displayLink}
    });
    res.render('search', {userData : formatted});
  });

});

module.exports = router;