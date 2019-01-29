var event=require('events');

var eventEmitter=new event.EventEmitter();

eventEmitter.on('someEvent',function (message) {
  console.log(message);
})
eventEmitter.emit('someEvent', "this is a test message");
