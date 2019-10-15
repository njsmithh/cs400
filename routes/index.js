var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello! How are you?' });
});

module.exports = router;

/* POST home page. */
router.post('/', function(req, res, next){

  const ret = {
    striiing: req.body.title,
    leeength: req.body.title.length
  }
  console.log(ret)
  res.render('index', {title: JSON.stringify(ret) });
});

module.exports = router;