var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Comedor Lima' });
});

router.post('/upload', function(req, res, next) {
  console.log(req.files);
});

module.exports = router;
