var fs = require('fs');
var rs = fs.createReadStream('./newfile3.txt');
var events = require('events');
var eventEmitter = new events.EventEmitter();

rs.on('open', function() {
  console.log('The file is open.');
});

// create eventHandler
var eventHandler = function() {
  console.log('I hear a scream!');
}

// assigne the eventHandler to an event
eventEmitter.on('scream', eventHandler);

// Fire the scream event
eventEmitter.emit('scream');
