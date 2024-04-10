var express = require('express');
const { home } = require('../controller');
var router = express.Router();

/* GET home page. */
router.get('/', home)

module.exports = router;
