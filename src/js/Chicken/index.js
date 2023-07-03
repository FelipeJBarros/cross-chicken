class Chicken {
    constructor(x, y, spd, size, physicComponent = null) {
        this.x = x;
        this.y = y;
        this.spd = spd;
        this.size = size;
        this.currentDirection = 'up'

        this.physicComponent = physicComponent;
    }

    verifyColisionWith(entity) {
        if (
            this.x < entity.x + entity.width &&
            this.x + this.size > entity.x &&
            this.y < entity.y + entity.height &&
            this.y + this.size > entity.y
        ) {
            if (entity instanceof Car) {
                this.x = 385;
                this.y = 600
                this.currentDirection = 'up'
            }

            if (entity instanceof BlockGarden) {
                switch (this.currentDirection) {
                    case 'left':
                        this.x = entity.x + entity.width;
                        break;
                    case 'right':
                        this.x = entity.x - this.size;
                        break;
                    case 'up':
                        this.y = entity.y + entity.height;
                        break;
                    case 'down':
                        this.y = entity.y - this.size;
                        break;
                }
            }
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
        World.canvasContext.drawImage(
            chickenSprite,
            spriteDirection * this.size, 0 * this.size,
            this.size, this.size,
            this.x, this.y,
            this.size, this.size
        )
    }

    move(delta) {
        if (this.physicComponent) this.physicComponent.move(this, delta);
    }
}