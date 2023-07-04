class ChickenRightCommand {
    constructor(chicken, timeStep) {
        this.chicken = chicken;
        this.timeStep = timeStep;
    }

    execute() {
        this.chicken.right = true;
    }

    undo() {
        this.chicken.right = false;
    }
}