new p5();

let imgSide, imgCut, imgTop, images;

function preload() {
  imgSide = loadImage("side.png");
  imgCut = loadImage("cut.png");
  imgTop = loadImage("top.png");
}

function setup() {
  createCanvas(1100, 700);
  imgSide.resize(imgSide.width / 2, 0);
  imgCut.resize(imgCut.width / 2, 0);
  imgTop.resize(imgTop.width / 2, 0);

  images = [imgCut, imgSide, imgTop];
  //   //  img = loadImage("http://localhost:8000/side.png");
  imageMode(CENTER);
}

let t = 0;
let index = 0;

function mouseClicked() {
  index = (index + 1) % images.length;
}

function draw() {
  background("#FFF");

  // Original offset
  translate(images[index].width / 2, images[index].height / 2);

  // Smallest wheel
  smallestScale = 0.3;

  push();
  translate(220 + 105, 180 - 105);
  scale(smallestScale);
  rotate((1 * 0.5 * t) / smallestScale);
  image(images[index], 0, 0);
  pop();

  // Small wheel
  smallScale = 0.5;

  push();
  translate(220, 180);
  scale(smallScale);
  rotate((-1 * 0.5 * t) / smallScale);
  image(images[index], 0, 0);
  pop();

  // Leftmost wheel
  push();
  rotate(0.5 * t);
  image(images[index], 0, 0);
  pop();

  // Rightmost wheel
  rightScale = 0.8;

  push();
  translate(532, 50);
  scale(rightScale);
  rotate(-(0.5 * t) / rightScale);
  image(images[index], 0, 0);
  pop();

  // Increase rotation
  t += 0.1;
}
