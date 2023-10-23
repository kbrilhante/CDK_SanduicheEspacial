class Asteroid {
    constructor(x, y) {
        this.sprite = new Sprite();
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.vel.x = -random(1, 3);
        this.sprite.collider = "k";
        this.sprite.diameter = 20;
        this.sprite.spriteSheet = asteroidSS;
        this.sprite.anis.frameSize = [64, 64];
        // this.sprite.anis.frameDelay = 1;
        this.sprite.addAnis({
            a0: { row: 0, frames: 16 },
            a1: { row: 1, frames: 16 },
            a2: { row: 2, frames: 16 },
            a3: { row: 3, frames: 16 },
            a4: { row: 4, frames: 16 },
            a5: { row: 5, frames: 16 }
        });
        this.sprite.changeAni("a" + floor(random(5)));
        this.sprite.anis.scale = 2;
    }
}