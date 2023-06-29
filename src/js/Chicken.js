class Chicken {
    constructor(x, y, spd, size) {
        this.x = x;
        this.y = y;
        this.spd = spd;
        this.size = size;
        this.currentDirection = 'up'
    }

    verifyColisionWith(entity) {
        if (
            this.x < entity.x + entity.width &&
            this.x + this.size > entity.x &&
            this.y < entity.y + entity.height &&
            this.y + this.size > entity.y
        ) {
            this.x = 385;
            this.y = 560
            this.currentDirection = 'up'
        }
    }

    draw() {
        let chickenSprite = new Image();
        chickenSprite.src = '../../assets/chicken-sprt.png'
        let spriteDirection = 0;
        switch (this.currentDirection) {
            case 'up':
                spriteDirection = 0;
                break;
            case 'down':
                spriteDirection = 1;
                break;
            case 'right':
                spriteDirection = 2;
                break;
            case 'left':
                spriteDirection = 3;
                break;
        }
        canvasContext.drawImage(
            chickenSprite,
            spriteDirection*this.size, 0*this.size,
            this.size, this.size,
            this.x, this.y,
            this.size, this.size
        )
    }

    move(delta) {
        if (KeyboardInput.movingRight) {
            this.x += this.spd * delta;
            this.currentDirection = 'right'
        } else if (KeyboardInput.movingLeft) {
            this.x -= this.spd * delta;
            this.currentDirection = 'left'
        } else if (KeyboardInput.movingUp) {
            this.y -= this.spd * delta;
            this.currentDirection = 'up'
        } else if (KeyboardInput.movingDown) {
            this.y += this.spd * delta;
            this.currentDirection = 'down'
        }

        if (this.x >= canvas.clientWidth - this.size) this.x = canvas.clientWidth - this.size
        if (this.x <= 0) this.x = 0
        if (this.y >= canvas.clientHeight - this.size) this.y = canvas.clientHeight - this.size
        if (this.y <= 0) this.y = 0
    }
}