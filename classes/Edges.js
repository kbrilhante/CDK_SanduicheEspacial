class Edges {
    constructor() {
        this.group = new Group();
        this.group.collider = 'k';
        this.group.visible = false;
        this.group.bounciness = 0;
        this.group.friction = 0;
        const thickness = 100;
        new this.group.Sprite(width / 2, -thickness / 2, width, thickness);
        new this.group.Sprite(width / 2, height + thickness / 2, width, thickness);
        new this.group.Sprite(-thickness / 2, height / 2, thickness, height);
        new this.group.Sprite(width + thickness / 2, height / 2, thickness, height);
    }
}