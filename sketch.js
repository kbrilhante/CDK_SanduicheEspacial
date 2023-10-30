let bgImg = [];
let alienSS, asteroidSS;
let bg, alien, edges, asteroids;
let gameStart, gameOver;

function preload() {
    bgImg.push(loadImage("./assets/star bg/1.png"));
    bgImg.push(loadImage("./assets/star bg/2.png"));
    bgImg.push(loadImage("./assets/star bg/3.png"));
    bgImg.push(loadImage("./assets/star bg/4.png"));
    alienSS = loadImage("./assets/alienSanduiche.png");
    asteroidSS = loadImage("./assets/asteroids64.png");
}

function setup() {
    new Canvas(bgImg[0].w / 2, bgImg[0].h / 2);

    gameStart = false;
    gameOver = false;

    bg = new BackgroundGroup(bgImg);
    edges = new Edges();

    alien = new Alien(alienSS);

    asteroids = new Asteroids();
}

function draw() {
    background("#fff");
    // if (kb.pressed("z")) {
    //     asteroids.sprite.changeAni("a0");
    // } else if (kb.pressed("x")) {
    //     asteroids.sprite.changeAni("a1");
    // } else if (kb.pressed("c")) {
    //     asteroids.sprite.changeAni("a2");
    // } else if (kb.pressed("v")) {
    //     asteroids.sprite.changeAni("a3");
    // } else if (kb.pressed("b")) {
    //     asteroids.sprite.changeAni("a4");
    // } else if (kb.pressed("n")) {
    //     asteroids.sprite.changeAni("a5");
    // }
    if (gameStart) {
        bg.checkPosition();
    }

    if (!gameStart && !gameOver && kb.pressed('enter')) {
        startGame();
    }

    if (gameStart && !gameOver) {
        alien.handleControls();
    }

}

function mousePressed() {
    allSprites.debug = true;
    asteroids.create()
}

function mouseReleased() {
    allSprites.debug = false;
}

function startGame() {
    gameStart = true;
    bg.move();
    alien.startFlying();
}