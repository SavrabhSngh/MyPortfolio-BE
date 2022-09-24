var express = require('express');
var router = express.Router();
const configuration = require('../Controller/UserConfig');

router.get('/config', configuration)

module.exports = router;
  