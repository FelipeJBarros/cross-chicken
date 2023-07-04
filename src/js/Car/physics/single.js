class SingleCarPhysics {
    constructor(reverse = false) {
        this.reverse = reverse
        this.aditionalSpeed = 0;
    }

    move(entity, delta) {
        if(this.reverse) {
            let delayDistance = getRandom(4, 1);
            entity.dir = -1;
            entity.x += (entity.speed + this.aditionalSpeed) * entity.dir * delta;
            
            if(entity.x <= -entity.width) {
                this.aditionalSpeed = getRandom(5,1)/10
                entity.x = World.canvas.clientWidth + (entity.width * delayDistance)
            }
            
        } else {
            let delayDistance = getRandom(4, 1);
            entity.dir = 1;
            entity.x += (entity.speed + this.aditionalSpeed) * entity.dir * delta;
    
            if(entity.x >= World.canvas.clientWidth + entity.width) {
                this.aditionalSpeed = getRandom(5,1)/10
                entity.x = -entity.width * delayDistance;
            }
        }
    }
}