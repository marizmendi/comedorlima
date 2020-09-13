var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Comedor Lima' });
});

/* GET upload. */
router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Comedor Lima - Upload' });
});

router.post('/upload', function(req, res, next) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let image = req.files.image;

  let location = './public/images/' + image.name;

  // Use the mv() method to place the file somewhere on your server
  image.mv(location, function(err) {
    if (err)
      return res.status(500).send(err);

    res.redirect('/images/' + image.name);
  });
});

module.exports = router;
