/**
 * listAllInstances model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerEvents = undefined;

var _events = require('events');

var listAllInstancesEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
listAllInstancesEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(listAllInstances) {
  for (var e in events) {
    var event = events[e];
    listAllInstances.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function (doc) {
    listAllInstancesEvents.emit(event + ':' + doc._id, doc);
    listAllInstancesEvents.emit(event, doc);
  };
}

exports.registerEvents = registerEvents;
exports.default = listAllInstancesEvents;
//# sourceMappingURL=listAllInstances.events.js.map
