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
        drawRect(this.x, this.y, this.size, this.size, '#FCFDFD')
        switch (this.currentDirection) {
            case 'up':
                drawRect(this.x + 10, this.y, 10, 30, '#FF223D')
                drawRect(this.x + 7.5, this.y - 5, 15, 5, '#FF3')
                break;
            case 'down':
                drawRect(this.x + 10, this.y, 10, 30, '#FF223D')
                drawRect(this.x + 7.5, this.y + this.size, 15, 5, '#FF3')
                break;
            case 'right':
                drawRect(this.x, this.y + 10, 30, 10, '#FF223D')
                drawRect(this.x + this.size, this.y + 7.5, 5, 15, '#FF3')
                break;
            case 'left':
                drawRect(this.x, this.y + 10, 30, 10, '#FF223D')
                drawRect(this.x - 5, this.y + 7.5, 5, 15, '#FF3')
                break;
        }
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