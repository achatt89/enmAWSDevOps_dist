/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/restarts              ->  index
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
var aws = require('aws-sdk');
// var util = require('util');

aws.config.update({ region: 'eu-west-1' });

var ec2 = new aws.EC2();

// Restarts an Instance
function index(request, response) {
  var params = {
    InstanceIds: [request.body.instanceId],
    DryRun: false
  };

  //Call EC2 to start the selected instance
  ec2.startInstances(params, function (error, data) {
    if (error) {
      response.json(error);
    } else {
      callback(data);
    }
  });

  function callback(data) {
    response.send(data);
  }
}
//# sourceMappingURL=restart.controller.js.map
