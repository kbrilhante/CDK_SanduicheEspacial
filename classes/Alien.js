class Alien {
    constructor(ss) {
        this.sprite = new Sprite();
        this.sprite.x = 120;
        this.sprite.y = height / 2;
        this.sprite.radius = 50;
        this.sprite.anis.frameDelay = 10;
        const aniOpt = {
            frameSize: [205, 176],
            frames: 5
        };
        this.sprite.addAni("fly", ss, aniOpt)
        this.sprite.mirror.x = -1;
    }
}