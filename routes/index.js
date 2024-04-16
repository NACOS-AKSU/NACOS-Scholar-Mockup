var express = require('express');
const { home, searchResultsPage, projectPage } = require('../controller');
var router = express.Router();

/* GET home page. */
router.get('/', home)
router.get('/search', searchResultsPage)
router.get('/project/:id', projectPage)

module.exports = router;
