class ChickenGraphics {
    draw(entity) {
        let chickenSprite = new Image();
        chickenSprite.src = '../../assets/chicken-sprt.png'
        let spriteDirection = 0;
        switch (entity.currentDirection) {
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
            spriteDirection * entity.size, 0 * entity.size,
            entity.size, entity.size,
            entity.x, entity.y,
            entity.size, entity.size
        )
    }
}