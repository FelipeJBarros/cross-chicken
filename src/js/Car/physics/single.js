class SingleCarPhysics {
    constructor(reverse = false) {
        this.reverse = reverse
    }
    move(entity, delta) {
        let delayDistance = getRandom(4, 1);
        if(this.reverse) {
            entity.dir = -1;
            entity.x += entity.speed * entity.dir * delta;

            if(entity.x <= -entity.width) {
                entity.x = World.canvas.clientWidth + (entity.width * delayDistance)
            }

        } else {
            entity.dir = 1;
            entity.x += entity.speed * entity.dir * delta;
    
            if(entity.x >= World.canvas.clientWidth + entity.width) {
                entity.x = -entity.width * delayDistance;
            }
        }
    }
}