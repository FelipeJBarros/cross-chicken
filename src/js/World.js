class World extends Observer {
    static canvas;
    static canvasContext;

    constructor() {
        super();

        // GAME LOOP ---
        this.lag = 0;
        this.lastFrameTimeMs = 0;
        this.maxFPS = 60;
        this.timeStep = 1000 / this.maxFPS;

        // Player Entity
        this.player = new Chicken(
            385, 580, 0.5, 30,
            new ChickenPhysics(),
            new ChickenGraphics(),
        )

        this.player.addObserver(this);

        // STAGES ---
        this.currentStage = 0
        this.gameStatus = 'running';
        this.MAX_STAGE = stagesData.length;
        this.stages = stagesData.map((data) => (
            new Stage(this, data, this.player)
        ))

        // INITIALIZATION ---
        World.canvas = document.getElementById('game')
        World.canvasContext = World.canvas.getContext('2d')
        requestAnimationFrame(this.mainLoop.bind(this))

        // - controls ---
        this.playerController = new ChickenController(this.player);

        this.playerController.setCommand('right', new ChickenRightCommand(this.player, this.timeStep))
        this.playerController.setCommand('left', new ChickenLeftCommand(this.player, this.timeStep))
        this.playerController.setCommand('up', new ChickenUpCommand(this.player, this.timeStep))
        this.playerController.setCommand('down', new ChickenDownCommand(this.player, this.timeStep))

        document.addEventListener(
            'keydown',
            (event) => {
                if(this.gameStatus !== 'running') return;
                KeyboardInput.onKeyPressed(event, this.playerController)
            }
        )

        document.addEventListener(
            'keyup',
            (event) => {
                if(this.gameStatus !== 'running') return;
                KeyboardInput.onKeyReleased(event, this.playerController)
            }
        )
        
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
        if (this.gameStatus != 'running') return;
        let currentStageObj = this.stages[this.currentStage]
        currentStageObj.move(delta);
    }

    draw = () => {
        this.stages[this.currentStage].draw();
        if (this.gameStatus === 'stopped') {
            drawRect(0, 0, World.canvas.width, World.canvas.height, "#222A")
            drawText("GAME OVER!", 100, 300, '100px arial', 4)
            drawText("> Pressione F5 para reiniciar <", 200, 400, '30px arial', 1)
        }
    }

    onNotify(ev) {
        switch (ev) {
            case EVENTS.PLAYER_HIT_CAR:
                this.gameStatus = 'stopped'
                break;
            case EVENTS.PLAYER_HIT_TOP_WALL:
                if (this.currentStage + 1 < this.MAX_STAGE) {
                    this.currentStage++;
                    this.stages[this.currentStage].setSpawnPointForStage()
                }
                break;
            default:
                break;

        }

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

        GamepadInput.ControllerInputs(this.playerController);

        while (this.lag >= this.timeStep) {
            this.move(this.timeStep);
            this.lag -= this.timeStep;
        }
        this.draw();
        requestAnimationFrame(this.mainLoop.bind(this));
    }
}