function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  noLoop()
}

function draw() {
  background(100);

  translate(width / 2, height / 2)

  branch(100)
}


function branch(len) {

  if (len > 10) {
  line(0, 0, 0, -len)
  translate(0, -len)
  rotate(30)
  branch(len * .7)
  }
}