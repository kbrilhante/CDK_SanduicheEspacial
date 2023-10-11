let bgImg = [];
let alienSS;
let bg, alien, edges;

function preload() {
    bgImg.push(loadImage("./assets/star bg/1.png"));
    bgImg.push(loadImage("./assets/star bg/2.png"));
    bgImg.push(loadImage("./assets/star bg/3.png"));
    bgImg.push(loadImage("./assets/star bg/4.png"));
    alienSS = loadImage("./assets/alienSanduiche.png");
}

function setup() {
    new Canvas (bgImg[0].w / 2, bgImg[0].h / 2);
    
    bg = new BackgroundGroup(bgImg);
    edges = new Edges();
    
    alien = new Alien(alienSS);
}

function draw() {
    background("#fff");

    bg.checkPosition();

    alien.handleControls();
}

function mousePressed() {
    allSprites.debug = true;
    bg.move();
    alien.startFlying();
}

function mouseReleased() {
    allSprites.debug = false;
}