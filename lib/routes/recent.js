'use strict'
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const SearchHistory = require('../db/models/searchhistory.js');

router.get('/', function(req, res){
  //find 10 most recent searches (most recent at the top), format, then send to user.
  SearchHistory.find({}).sort({"createdAt": "desc"}).limit(10).exec(function(err, docs){
    let formatted = docs.map(function(doc){
      return { term : doc.term, when: doc.createdAt}
    });
    res.json(formatted);
  })
});

module.exports = router;