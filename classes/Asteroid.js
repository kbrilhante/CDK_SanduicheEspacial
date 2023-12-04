class Asteroids {
    constructor() {
        this.group = new Group();
        this.group.collider = "k";
        this.group.diameter = 64;
        this.group.spriteSheet = asteroidSS;
        this.group.anis.frameSize = [64, 64];
        // this.group.anis.frameDelay = 1;
        this.group.addAnis({
            a0: { row: 0, frames: 1 },
            a1: { row: 1, frames: 1 },
            a2: { row: 2, frames: 1 },
            a3: { row: 3, frames: 1 },
            a4: { row: 4, frames: 1 },
            a5: { row: 5, frames: 1 },
            a6: { row: 6, frames: 1 },
            // a7: { row: 7, frames: 1 }
        });
        this.group.addAni("explode", "./assets/Explosion21.png", {
            frameSize: [128, 128],
            frames: 16
        });
    }
    create() {
        if (frameCount % 200 === 0) {
            let sprite = new this.group.Sprite();
            sprite.x = random(width + this.group.diameter, 2 * width);
            sprite.y = random(this.group.diameter, height - this.group.diameter);
            sprite.vel.x = -random(1, 4);
            const l = Object.keys(this.group.anis).length - 1 // quantidade de animações
            sprite.changeAni("a" + floor(random(l)));
            sprite.rotationSpeed = random([-1, 1]) * sprite.vel.x;
            sprite.scale = random(0.3, 1);
        }
    }
    destroy() {
        for (let i = 0; i < this.group.length; i++) {
            let ast = this.group[i];
            if (ast.x < -100) {
                ast.life = -1;
            }
        }
    }
}