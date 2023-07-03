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

    move(delta) {
        if(this.physicComponent) this.physicComponent.move(this, delta);
        // this.x += this.speed * this.dir * delta;
        // if (
        //     this.x >= World.canvas.clientWidth + this.width ||
        //     this.x <= -this.width * 2
        // ) {
        //     if (Math.random() >= .5) {
        //         this.x = -this.width
        //     } else {
        //         this.dir *= -1;
        //     }
        //     this.y = getRandom(430, 90);
        //     this.currentColor = getRandom(4)
        // }
    }

    draw() {
        let carSprite = new Image();
        carSprite.src = '../../assets/car-sprt.png'

        let sprt_direction = this.dir > 0 ? 0 : 1

        World.canvasContext.drawImage(
            carSprite,
            this.currentColor*this.width, sprt_direction*this.height,
            this.width, this.height,
            this.x, this.y,
            this.width, this.height
        )
    }
}