class ChickenDownCommand {
    constructor(chicken, timeStep) {
        this.chicken = chicken;
        this.timeStep = timeStep;
    }

    execute() {
        this.chicken.down = true;
    }

    undo() {
        this.chicken.down = false;
    }
}