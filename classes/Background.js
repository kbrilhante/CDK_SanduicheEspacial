class Background {
    constructor(layer, ibagem) {
        this.w = ibagem.w;
        this.group = new Group();
        this.group.ani = ibagem;
        this.group.layer = layer;
        this.group.collider = "n";
        this.group.y = height / 2;
        for (let i = 0; i < 4; i++) {
            let spr = new this.group.Sprite();
            spr.x = ibagem.w * i;
        }
    }
    move() {
        this.group.vel.x = -(this.group.layer + 1);
        return this.group.vel.x;
    }
    checkPosition() {
        for (let i = 0; i < this.group.length; i++) {
            const spr = this.group[i];
            console.log(spr.pos.x)

            if (spr.x < -this.w / 2) {
                spr.x = this.lastXPosition() + this.w;
            }
        }
    }
    lastXPosition() {
        let x = 0;
        for (let i = 0; i < this.group.length; i++) {
            const spr = this.group[i];
            if (spr.x > x) {
                x = spr.x;
            }
        }
        return x;
    }
}

class BackgroundGroup {
    constructor(bgImg) {
        this.group = [];
        for (let i = 0; i < bgImg.length; i++) {
            let b = new Background(i, bgImg[i]);
            this.group.push(b);
        }
    }
    move() {
        for (let i = 0; i < this.group.length; i++) {
            this.group[i].move();
        }        
    }
    checkPosition() {
        for (let i = 0; i < this.group.length; i++) {
            this.group[i].checkPosition();
        }
    }
}