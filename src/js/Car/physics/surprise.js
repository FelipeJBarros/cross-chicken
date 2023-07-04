class SurpriseCarPhysics {
    constructor(reverse = false) {
        this.elapsedTime = 0;
        this.lastTime = 0;
    }

    move(entity, delta, world) {
        this.elapsedTime += delta;
        if(this.elapsedTime >= 2000) {
            let player = world.stages[world.currentStage].player
            let playerHeight = player.y - (entity.height/2 - player.size/2);
            entity.y = playerHeight
            entity.x += entity.speed*delta;
        }
    }
}