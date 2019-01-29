var events=require('events');
var utils=require('util');

var Person=function(name){
  this.name=name;
};
utils.inherits(Person, events.EventEmitter);

var raj=new Person('raj');
var sallu=new Person('sallu');

var people=[raj, sallu];
people.forEach(function(person){
  person.on('speak',function(message){
    console.log(person.name+" said: "+message);
  });
});

raj.emit('speak',"how are you?");
sallu.emit('speak',"i am fine");
