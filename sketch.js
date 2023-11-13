let bgImg = [];
let alienSS, asteroidSS, tomatoAni;
let bg, alien, edges, asteroids;
let gameStart, gameOver;

function preload() {
    bgImg.push(loadImage("./assets/star bg/1.png"));
    bgImg.push(loadImage("./assets/star bg/2.png"));
    bgImg.push(loadImage("./assets/star bg/3.png"));
    bgImg.push(loadImage("./assets/star bg/4.png"));
    alienSS = loadImage("./assets/alienSanduiche.png");
    asteroidSS = loadImage("./assets/asteroids64.png");
    tomatoAni = loadImage("./assets/tomate.png");
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
    if (gameStart) {
        bg.checkPosition();
    }

    if (!gameStart && !gameOver && kb.pressed('enter')) {
        startGame();
    }
    
    if (gameStart && !gameOver) {
        alien.handleControls();
        asteroids.create();
        asteroids.destroy();
        console.log(frameCount);
    }

}

function mousePressed() {
    allSprites.debug = true;
}

function mouseReleased() {
    allSprites.debug = false;
}

function startGame() {
    gameStart = true;
    bg.move();
    alien.startFlying();
}