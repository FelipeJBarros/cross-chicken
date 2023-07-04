class Chicken extends Subject {
    constructor(
        x, y, spd, size,
        physicComponent = null,
        graphicComponent = null,
        world
    ) {
        super();
        this.x = x;
        this.y = y;
        this.spd = spd;
        this.dashSpd = 0;
        this.size = size;
        this.currentDirection = 'up'

        this.physicComponent = physicComponent;
        this.graphicComponent = graphicComponent;

        this.addObserver(world)
    }

    verifyColisionWith(entity) {
        if (
            this.x < entity.x + entity.width &&
            this.x + this.size > entity.x &&
            this.y < entity.y + entity.height &&
            this.y + this.size > entity.y
        ) {
            if (entity instanceof Car) {
                super.notify(EVENTS.PLAYER_HIT_CAR)
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
        if(this.graphicComponent) this.graphicComponent.draw(this)
    }

    move(delta) {
        if (this.physicComponent) this.physicComponent.move(this, delta);
    }
}