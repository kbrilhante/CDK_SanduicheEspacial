let bgImg = [];
let bg;

function preload() {
    bgImg.push(loadImage("./assets/fundoVermelho/Parallax100.png"));
    bgImg.push(loadImage("./assets/fundoVermelho/Parallax80.png"));
    bgImg.push(loadImage("./assets/fundoVermelho/Parallax60.png"));
}

function setup() {
    new Canvas (bgImg[0].w * 2, bgImg[0].h);
    
    bg = new BackgroundGroup(bgImg);
}

function draw() {
    background("#fff");

    bg.checkPosition();
}

function mousePressed() {
    bg.move();
}