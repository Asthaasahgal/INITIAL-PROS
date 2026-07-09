const clock = document.getElementById ('clock');
// const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
//console.log(date.toLocalTimingString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);


