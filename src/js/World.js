class World {
    static canvas;
    static canvasContext;

    static currentStage;

    constructor() {
        // GAME LOOP ---
        this.lag = 0;
        this.lastFrameTimeMs = 0;
        this.maxFPS = 60;
        this.timeStep = 1000 / this.maxFPS;

        // ENTITIES ---
        this.currentStage = 0
        this.MAX_STAGE = stagesData.length;
        this.stages = stagesData.map((data) => (
            new Stage(this, data)
        ))

        // INITIALIZATION ---
        World.canvas = document.getElementById('game')
        World.canvasContext = World.canvas.getContext('2d')
        requestAnimationFrame(this.mainLoop.bind(this))

        // - controls ---
        window.onkeydown = KeyboardInput.onKeyPressed;
        window.onkeyup = KeyboardInput.onKeyReleased;
        window.addEventListener(
            'gamepadconnected',
            (event) => GamepadInput.onGamepadConnection(event)
        )
        window.addEventListener(
            'gamepaddisconnected',
            (event) => GamepadInput.onGamepadDesconnection(event)
        )
    }

    move = (delta) => {
        let currentStageObj = this.stages[this.currentStage]
        currentStageObj.move(delta);

        if (
            currentStageObj.player.y <= 0 &&
            this.currentStage + 1 < this.MAX_STAGE
        ) {
            this.currentStage++;
            console.log('passou de fase')
        }

        // this.entities.forEach(entity => entity.move(delta))
        // this.chicken.verifyColisionWith(this.car);
    }

    draw = () => {
        this.stages[this.currentStage].draw();

        // // Render World
        // drawRect(0, 0, World.canvas.clientWidth, World.canvas.clientHeight, '#333')
        // drawRect(0, 0, World.canvas.clientWidth, 80, '#6D5D6E')

        // World.canvasContext.setLineDash([60, 30]);
        // drawLine(
        //     [0, World.canvas.clientHeight / 2 - 5],
        //     [World.canvas.clientWidth, World.canvas.clientHeight / 2 - 5],
        //     10, '#E7B10A'
        // )

        // drawRect(0, World.canvas.clientHeight - 80, World.canvas.clientWidth, 80, '#6D5D6E')

        // // Render entities
        // this.entities.forEach(entity => entity.draw())
    }

    mainLoop = (timeStamp) => {
        // max FPS control
        if (timeStamp < this.lastFrameTimeMs + this.timeStep) {
            requestAnimationFrame(this.mainLoop.bind(this));
            return;
        }

        //pattern game loop
        this.lag += timeStamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timeStamp;

        GamepadInput.ControllerInputs();

        while (this.lag >= this.timeStep) {
            this.move(this.timeStep);
            this.lag -= this.timeStep;
        }
        this.draw();
        requestAnimationFrame(this.mainLoop.bind(this));
    }
}