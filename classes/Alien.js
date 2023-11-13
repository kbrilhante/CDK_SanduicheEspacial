class Alien {
    constructor() {
        this.acceleration = {
            x: 0.2,
            y: 0.2
        }
        this.isFlying = false;
        this.sprite = new Sprite();
        this.sprite.x = 120;
        this.sprite.y = height / 2;
        this.sprite.radius = 50;
        this.sprite.anis.frameDelay = 10;
        const aniOpt = {
            frameSize: [205, 176],
            frames: 20,
            frameDelay: 2
        };
        this.sprite.addAni("fly", alienSS, aniOpt)
        this.sprite.ani.stop();
        this.sprite.mirror.x = -1;
        this.sprite.scale = 0.7;
        this.sprite.bounciness = 0;
        this.sprite.friction = 0;
        this.sprite.rotationDrag = 0;
        this.shots = new Group();
        this.shots.collider = "k";
        this.shots.diameter = 22;
        this.shots.anis.frameSize = [22, 22];
        this.shots.addAni("tomato", tomatoAni);
    }
    startFlying() {
        this.sprite.ani.play();
        this.isFlying = true;
    }
    handleControls() {
        if (this.isFlying) {
            if (kb.pressing('a')) {
                this.sprite.vel.x -= this.acceleration.x;
            } else if (kb.pressing('d')) {
                this.sprite.vel.x += this.acceleration.x;
            } else {
                this.sprite.vel.x = 0;
            }
            if (kb.pressing('w')) {
                this.sprite.vel.y -= this.acceleration.y;
            } else if (kb.pressing('s')) {
                this.sprite.vel.y += this.acceleration.y;
            } else {
                this.sprite.vel.y = 0;
            }
            if (kb.presses(' ')) {
                this.shoot();
            }
        }
    }
    shoot() {
        let t = new this.shots.Sprite();
        t.x = this.sprite.x;
        t.y = this.sprite.y;
        t.vel.x = 10;
    }
}