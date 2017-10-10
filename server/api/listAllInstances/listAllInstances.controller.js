/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/listAllInstancess              ->  index
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
var aws = require('aws-sdk');
var util = require('util');

aws.config.update({ region: 'eu-west-1' });

var ec2 = new aws.EC2();

// Gets a list of ListAllInstances
function index(request, response) {
  var io = request.app.get('io');
  ec2.describeInstances(function (error, data) {
    if (error) {
      response.json(error);
    } else {
      // io.emit('fetchInstanceList', response.send(util.format('%s', data)));
      callback(util.format('%j', data), io);
    }
  });

  function callback(data, io) {
    response.send(data);
    // io.emit('fetchInstanceList', response.send(data));
  }
}
//# sourceMappingURL=listAllInstances.controller.js.map
