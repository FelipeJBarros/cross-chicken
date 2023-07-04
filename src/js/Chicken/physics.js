class ChickenPhysics {
    move(entity, delta) {
        if (KeyboardInput.movingRight || GamepadInput.movingRight) {
            entity.x += entity.spd * delta;
            entity.currentDirection = 'right'
        } else if (KeyboardInput.movingLeft || GamepadInput.movingLeft) {
            entity.x -= entity.spd * delta;
            entity.currentDirection = 'left'
        } else if (KeyboardInput.movingUp || GamepadInput.movingUp) {
            entity.y -= entity.spd * delta;
            entity.currentDirection = 'up'
        } else if (KeyboardInput.movingDown || GamepadInput.movingDown) {
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