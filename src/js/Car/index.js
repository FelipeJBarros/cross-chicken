class Car {
    constructor(x, y, speed, width, height, direction, physicComponent = null) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;

        this.dir = direction;
        this.currentColor = 0;
        this.physicComponent = physicComponent
    }

    move(delta, world) {
        if(this.physicComponent) this.physicComponent.move(this, delta, world);
    }

    draw() {
        let carSprite = new Image();
        carSprite.src = '../../assets/car-sprt.png'

        let sprt_direction = this.dir > 0 ? 0 : 1

        if(this.x >= World.canvas.clientWidth || this.x <= -this.width) {
            this.currentColor = getRandom(4)
        }

        World.canvasContext.drawImage(
            carSprite,
            this.currentColor*this.width, sprt_direction*this.height,
            this.width, this.height,
            this.x, this.y,
            this.width, this.height
        )
    }
}