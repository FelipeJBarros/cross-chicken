class ChickenPhysics {
    move(entity, delta) {
        if (entity.right) {
            entity.x += entity.spd * delta;
            entity.currentDirection = 'right'
        } else if (entity.left) {
            entity.x -= entity.spd * delta;
            entity.currentDirection = 'left'
        } else if (entity.up) {
            entity.y -= entity.spd * delta;
            entity.currentDirection = 'up'
        } else if (entity.down) {
            entity.y += entity.spd * delta;
            entity.currentDirection = 'down'
        }

        if (entity.x >= World.canvas.clientWidth - entity.size) {
            entity.x = World.canvas.clientWidth - entity.size
        }
        if (entity.x <= 0) entity.x = 0
        if (entity.y >= World.canvas.clientHeight - entity.size) {
            entity.y = World.canvas.clientHeight - entity.size
        }
        if (entity.y <= 0) {
            entity.y = 0
            entity.notify(EVENTS.PLAYER_HIT_TOP_WALL)
        }
    }
}