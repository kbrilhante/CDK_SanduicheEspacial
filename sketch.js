let bgImg = [];
let alienSS, alienJSON;
let bg, alien;

function preload() {
    bgImg.push(loadImage("./assets/star bg/1.png"));
    bgImg.push(loadImage("./assets/star bg/2.png"));
    bgImg.push(loadImage("./assets/star bg/3.png"));
    bgImg.push(loadImage("./assets/star bg/4.png"));
    alienSS = loadImage("./assets/alienSanduiche.png");
    // alienJSON = loadJSON("./assets/alienSanduiche.json");
}

function setup() {
    new Canvas (bgImg[0].w / 2, bgImg[0].h / 2);
    
    bg = new BackgroundGroup(bgImg);
    
    alien = new Alien(alienSS);
}

function draw() {
    background("#fff");

    bg.checkPosition();
}

function mousePressed() {
    allSprites.debug = true;
    bg.move();
}

function mouseReleased() {
    allSprites.debug = false;
}