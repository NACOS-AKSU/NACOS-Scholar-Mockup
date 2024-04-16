var express = require('express');
const { home, searchResultsPage, projectPage } = require('../controller');
const { triggerDownload } = require('../controller/project');
var router = express.Router();

/* GET home page. */
router.get('/', home)
router.get('/search', searchResultsPage)
router.get('/project/download/:id', triggerDownload)
router.get('/project/:id', projectPage)

module.exports = router;
