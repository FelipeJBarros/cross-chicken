class Car {
    constructor(x, y, speed, width, height) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;

        this.dir = 1;
        this.currentColor = 0;
    }

    move(delta) {
        this.x += this.speed * this.dir * delta;
        if (
            this.x >= canvas.clientWidth + this.width ||
            this.x <= -this.width * 2
        ) {
            if (Math.random() >= .5) {
                this.x = -this.width
            } else {
                this.dir *= -1;
            }
            this.y = getRandom(430, 90);
            this.currentColor = getRandom(4)
        }
    }

    draw() {
        let carSprite = new Image();
        carSprite.src = '../../assets/car-sprt.png'

        let sprt_direction = this.dir > 0 ? 0 : 1

        canvasContext.drawImage(
            carSprite,
            this.currentColor*this.width, sprt_direction*this.height,
            this.width, this.height,
            this.x, this.y,
            this.width, this.height
        )
    }
}