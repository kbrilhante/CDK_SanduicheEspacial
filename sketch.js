let bgImg = [];
let alienSS, asteroidSS;
let bg, alien, edges, asteroids;

function preload() {
    bgImg.push(loadImage("./assets/star bg/1.png"));
    bgImg.push(loadImage("./assets/star bg/2.png"));
    bgImg.push(loadImage("./assets/star bg/3.png"));
    bgImg.push(loadImage("./assets/star bg/4.png"));
    alienSS = loadImage("./assets/alienSanduiche.png");
    asteroidSS = loadImage("./assets/asteroides.png");
}

function setup() {
    new Canvas(bgImg[0].w / 2, bgImg[0].h / 2);

    bg = new BackgroundGroup(bgImg);
    edges = new Edges();

    alien = new Alien(alienSS);

    asteroids = new Asteroid(width / 2, height / 2);
}

function draw() {
    background("#fff");

    bg.checkPosition();

    alien.handleControls();

    if (kb.pressed("z")) {
        asteroids.sprite.changeAni("a0");
    } else if (kb.pressed("x")) {
        asteroids.sprite.changeAni("a1");
    } else if (kb.pressed("c")) {
        asteroids.sprite.changeAni("a2");
    } else if (kb.pressed("v")) {
        asteroids.sprite.changeAni("a3");
    } else if (kb.pressed("b")) {
        asteroids.sprite.changeAni("a4");
    } else if (kb.pressed("n")) {
        asteroids.sprite.changeAni("a5");
    }
}

function mousePressed() {
    allSprites.debug = true;
    bg.move();
    alien.startFlying();
}

function mouseReleased() {
    allSprites.debug = false;
}

function keyPressed() {

}