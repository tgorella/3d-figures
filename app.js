const brick = document.getElementById('brick');
const triangle = document.getElementById('triangle');
const circle = document.getElementById('circle');
const pentagon = document.getElementById('pentagon');

const buttons = document.getElementById('btns');
let x = -20
let y = -30

let tx = -104
let ty = 62

let cy = -20
let cx = -10


brick.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
triangle.style.transform = `rotateX(${tx}deg) rotateY(0deg) rotateZ(${ty}deg)`
circle.style.transform = `rotateX(${cx}deg) rotateY(${cy}deg)`
pentagon.style.transform = `rotateX(${cx}deg) rotateY(${cy}deg)`


buttons.addEventListener('click', (e) => {
  if (e.target.id === 'up') {

      x += 10;
      tx+= 10
      cx += 10
      

  } else if (e.target.id === 'down') {
   x -= 10
   tx -= 10
   cx -= 10
  } else if (e.target.id === 'right') {
   y+= 10
   ty+=10
   cy += 10
  } else if (e.target.id === 'left') {
   y-= 10
   ty -= 10
   cy -= 10
  }
  brick.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
triangle.style.transform = `rotateX(${tx}deg) rotateY(0deg) rotateZ(${ty}deg)`
circle.style.transform = `rotateX(${cx}deg) rotateY(${cy}deg)`
pentagon.style.transform = `rotateX(${cx}deg) rotateY(${cy}deg)`


})
