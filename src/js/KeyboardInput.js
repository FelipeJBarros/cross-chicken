class KeyboardInput {
    static movingUp = false;
    static movingDown = false;
    static movingRight = false;
    static movingLeft = false;

    static onKeyPressed = (event) => {
        switch (event.key) {
            case 'ArrowRight':
                this.movingRight = true;
                break;
            case 'ArrowLeft':
                this.movingLeft = true;
                break;
            case 'ArrowUp':
                this.movingUp = true;
                break;
            case 'ArrowDown':
                this.movingDown = true;
                break;
            default:
                return;
        }
    }

    static onKeyReleased = (event) => {
        switch (event.key) {
            case 'ArrowRight':
                this.movingRight = false;
                break;
            case 'ArrowLeft':
                this.movingLeft = false;
                break;
            case 'ArrowUp':
                this.movingUp = false;
                break;
            case 'ArrowDown':
                this.movingDown = false;
                break;
            default:
                return;
        }
    }
}