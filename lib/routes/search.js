'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');

const endpoint = 'https://www.googleapis.com/customsearch/v1?key=' + process.env.API_KEY 
  + '&cx=' + process.env.CX_KEY + '&searchType=image' + '&q='


//api/imagesearch
router.get('/', function(req, res){
  res.send(JSON.stringify({}));
});

router.get('/:searchterm', function(req, res){
  let searchTerm = req.params.searchterm.split(' ').join('+');  
  let offset = parseInt(req.query.offset) || 1;
  
  request(endpoint + searchTerm + '&start=' + offset +'&exactTerms=' + searchTerm, function(err, data){
    let results = JSON.parse(data.body).items
    if (results){
      let formatted = results.map(function(imgObj){
        return {title: imgObj.title, url: imgObj.link, snippet: imgObj.snippet, site: imgObj.displayLink}
      });
      res.render('search', {imgData : formatted});
    } else {
      res.send(JSON.stringify({imgData : null}));
    }
  });

});

module.exports = router;