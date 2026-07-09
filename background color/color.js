console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'lightpink') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'lightblue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'mediumaquamarine') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'lavender') {
      body.style.backgroundColor = e.target.id;
    }
    
    if (e.target.id === 'plum') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

