class GamepadInput {
    static index = null;
    static movingUp = false;
    static movingDown = false;
    static movingRight = false;
    static movingLeft = false;

    static onGamepadConnection = (event) => {
        this.index = event.gamepad.index
        console.log('Controle conectado')
    }

    static onGamepadDesconnection = (event) => {
        this.index = null
        console.log('Controle conectado')
    }

    static ControllerInputs = () => {
        if(this.index !== null) {
            const gamepad = navigator.getGamepads()[this.index];

            const gamepadBtns = gamepad.buttons;
            this.movingUp = gamepadBtns[12].pressed;
            this.movingDown = gamepadBtns[13].pressed;
            this.movingRight = gamepadBtns[15].pressed;
            this.movingLeft = gamepadBtns[14].pressed;

            const stickDeadeZone = 0.4;
            const horizontalValue = gamepad.axes[0]
            const verticalValue = gamepad.axes[1]

            if(horizontalValue >= stickDeadeZone) {
                this.movingRight = true;
            } else if (horizontalValue <= - stickDeadeZone) {
                this.movingLeft = true;
            } else if(verticalValue >= stickDeadeZone) {
                this.movingDown = true;
            } else if (verticalValue <= - stickDeadeZone) {
                this.movingUp = true;
            }
        }
    }
}