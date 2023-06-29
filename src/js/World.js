class World {
    static canvas;
    static canvasContext;

    constructor() {
        // GAME LOOP ---
        this.lag = 0;
        this.lastFrameTimeMs = 0;
        this.maxFPS = 60;
        this.timeStep = 1000 / this.maxFPS;

        // ENTITIES ---
        this.chicken = new Chicken(
            385, 560, .15, 30,
            new ChickenPhysics()
        );
        this.car = new Car(200, 150, 1, 160, 80);

        this.entities = [this.chicken, this.car]

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
        this.entities.forEach(entity => entity.move(delta))
        this.chicken.verifyColisionWith(this.car);
    }

    draw = () => {
        // Render World
        drawRect(0, 0, World.canvas.clientWidth, World.canvas.clientHeight, '#333')
        drawRect(0, 0, World.canvas.clientWidth, 80, '#6D5D6E')

        World.canvasContext.setLineDash([60, 30]);
        drawLine(
            [0, World.canvas.clientHeight / 2 - 5],
            [World.canvas.clientWidth, World.canvas.clientHeight / 2 - 5],
            10, '#E7B10A'
        )

        drawRect(0, World.canvas.clientHeight - 80, World.canvas.clientWidth, 80, '#6D5D6E')

        // Render entities
        this.entities.forEach(entity => entity.draw())
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