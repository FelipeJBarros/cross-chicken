class Car {
    constructor(x, y, speed, width, height, color) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.color = color;

        this.dir = 1;
    }

    move(delta) {
        this.x += this.speed * this.dir * delta;
        if (
            this.x >= canvas.clientWidth + this.width ||
            this.x <= -this.width * 2
        ) {
            if (Math.random() >= 0) {
                this.x = -this.width
            } else {
                this.dir *= -1;
            }
            this.y = Math.floor(Math.random() * (430 - 90) + 90)
        }
    }

    draw() {
        drawRect(this.x, this.y, this.width, this.height, this.color);
        drawRect(this.x + 10, this.y + 5, 110, this.height - 10, '#79c2d0');
        drawLine(
            [this.x + 10, this.y + 5],
            [this.x + 35, this.y + 12],
            4, this.color
        )
        drawLine(
            [this.x + 10, this.y + this.height - 5],
            [this.x + 35, this.y + this.height - 13],
            4, this.color
        )
        drawLine(
            [this.x + 120, this.y + 5],
            [this.x + 85, this.y + 12],
            4, this.color
        )
        drawLine(
            [this.x + 120, this.y + this.height - 5],
            [this.x + 85, this.y + this.height - 13],
            4, this.color
        )
        drawLine(
            [this.x + 60, this.y + 5],
            [this.x + 60, this.y + this.height + 5],
            4, this.color
        )
        drawRect(this.x + 30, this.y + 10, 60, this.height - 20, this.color)
    }
}