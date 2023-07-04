class KeyboardInput {
    static movingUp = false;
    static movingDown = false;
    static movingRight = false;
    static movingLeft = false;

    static onKeyPressed = (event, controller) => {
        switch (event.key) {
            case 'ArrowUp':
                controller.execute('up');
                break;
            case 'ArrowDown':
                controller.execute('down');
                break;
            case 'ArrowRight':
                controller.execute('right');
                break;
            case 'ArrowLeft':
                controller.execute('left');
                break;
        }
    }

    static onKeyReleased = (event, controller) => {
        switch (event.key) {
            case 'ArrowUp':
                controller.undo('up');
                break;
            case 'ArrowDown':
                controller.undo('down');
                break;
            case 'ArrowRight':
                controller.undo('right');
                break;
            case 'ArrowLeft':
                controller.undo('left');
                break;
        }
    }
}