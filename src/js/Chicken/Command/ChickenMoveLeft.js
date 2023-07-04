class ChickenLeftCommand {
    constructor(chicken, timeStep) {
        this.chicken = chicken;
        this.timeStep = timeStep;
    }

    execute() {
        this.chicken.left = true;
    }

    undo() {
        this.chicken.left = false;
    }
}