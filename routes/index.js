var express = require('express');
const { home, searchResultsPage } = require('../controller');
var router = express.Router();

/* GET home page. */
router.get('/', home)
router.get('/search', searchResultsPage)

module.exports = router;
