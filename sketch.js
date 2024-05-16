function setup() {
  createCanvas(600, 600);
  background("white")
}

function draw() {
  stroke("blue");
  fill("green");
  
  
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 10, 15);
  }
}
