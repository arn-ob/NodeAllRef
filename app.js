var event = require('events');

var eventEmitter = new event.EventEmitter();

eventEmitter.on('scream',function(){
    console.log("A scream is diii");
});

eventEmitter.on('screams',function(){
    console.log("A scream is diiissssss");
});


eventEmitter.emit('screams');


eventEmitter.on('Arnon',function(str){
    console.log('hellow',+str.toString());
});

eventEmitter.emit('Arnon','arnob');

// this is come from onather code
var time = require('./titleDate.js');
console.log('this is the code from other part'+time.mydateTime());



