// console.log('welcome to animated clock')

function clock(){
  const now = new Date()
  const canvas = document.getElementById('canvas')
  // To get context from canvas
  const ctx = canvas.getContext('2d')

  // setup canvas
  ctx.save(); // save the default state

  ctx.clearRect(0, 0, 500, 500) // clear the whole rectangle ---(to start... x, y axis, width and height... to span)

  // we want the clock in the middle of the canvas
  ctx.translate(250, 250) // puts the 0, 0 in the middle

  // rotate the clock by -90 degrees
  ctx.rotate(-(Math.PI / 2));

  // set def styles
  ctx.strokeStyle = '#000000' //---> Line Colors
  ctx.fillStyle = '#f4f4f4' //--->
  ctx.lineWidth = 5;
  ctx.lineCap = 'round'; //--->makes the end of the line rounded

  // draw clock face/border
  ctx.save()
  ctx.beginPath()
  ctx.lineWidth = 14
  ctx.strokeStyle = '#800000';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true)
  ctx.stroke() // Draws the circle
  ctx.fill()

  ctx.restore();

  // draw hour lines
  



  ctx.restore(); // restore the default state
}
clock();