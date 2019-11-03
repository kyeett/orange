new p5();

let img, imgCut, imgTop, images;

function preload() {
  img = loadImage("side.png");
  imgCut = loadImage("cut.png");
  imgTop = loadImage("top.png");
}

function setup() {
  createCanvas(500, 500);
  img.resize(img.width / 2, 0);
  imgCut.resize(imgCut.width / 2, 0);
  imgTop.resize(imgTop.width / 2, 0);

  images = [img, imgCut, imgTop];
  //   //  img = loadImage("http://localhost:8000/side.png");
}

let t = 0;
let index = 2;

function mouseClicked() {
  index = (index + 1) % images.length;
}

function draw() {
  background("#FFF");

  mouseIsPressed;
  push();
  translate(images[index].width / 2, images[index].height / 2);
  rotate(0.5 * t);
  imageMode(CENTER);

  //   translate(img.width, img.height);
  //   translate(img.width / 2, img.height / 2);

  image(images[index], 0, 0);
  pop();
  t += 0.1;
}
