const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('made it to /api/recent');
});

module.exports = router;