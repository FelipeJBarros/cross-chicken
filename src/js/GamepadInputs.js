class GamepadInput {
    static index = null;

    static onGamepadConnection = (event) => {
        this.index = event.gamepad.index
        console.log('Controle conectado')
    }

    static onGamepadDesconnection = (event) => {
        this.index = null
        console.log('Controle conectado')
    }

    static ControllerInputs = (controller) => {
        if(this.index !== null) {
            const gamepad = navigator.getGamepads()[this.index];
            const gamepadBtns = gamepad.buttons;
            const stickDeadeZone = 0.4;
            const horizontalValue = gamepad.axes[0]
            const verticalValue = gamepad.axes[1]

            if(
                gamepadBtns[12].pressed ||
                verticalValue <= - stickDeadeZone
            ) {
                controller.execute('up')
            } else {
                controller.undo('up')
            }

            if(
                gamepadBtns[13].pressed ||
                verticalValue >= stickDeadeZone
            ) {
                controller.execute('down')
            } else {
                controller.undo('down')
            }

            if(
                gamepadBtns[14].pressed ||
                horizontalValue <= - stickDeadeZone
            ) {
                controller.execute('left')
            } else {
                controller.undo('left')
            }

            if(
                gamepadBtns[15].pressed ||
                horizontalValue >= stickDeadeZone
            ) {
                controller.execute('right')
            } else {
                controller.undo('right')
            }
        }
    }
}