'use strict';

var express = require('express');
var controller = require('./clone.controller');

var router = express.Router();

router.put('/', controller.index);

module.exports = router;
//# sourceMappingURL=index.js.map
