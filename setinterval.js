/////////////setInterval
var time=0;
var interval=setInterval(function(){
  time+=2;
  console.log(time+" seconds have been passed");
  if(time>5)
  clearInterval(interval);
},2000);
