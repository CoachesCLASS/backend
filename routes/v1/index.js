var express = require('express')
var router = express.Router()

let example = require('./example')

router.route('/propertyName')
  .get(example.getAll)

router.route('/propertyName/:subpropertyId')
  .get(example.getAllForSubproperty)

module.exports = router;
