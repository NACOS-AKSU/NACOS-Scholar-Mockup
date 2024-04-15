var express = require('express');
const { pingBackend } = require('../controller/abstract');
var router = express.Router();

/*return backend stat. */
router.get('/ping-api', pingBackend);

module.exports = router;
