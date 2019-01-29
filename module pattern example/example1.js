var counter=function(array){
  return "there are total "+array.length+" element";
};

var adder=function(a,b){
  return "addition of "+a+" and "+b+" is: "+(a+b);
};

var pi=3.14;

module.exports = {
  count:counter,
  add:adder,
  pivalue:pi,
};
