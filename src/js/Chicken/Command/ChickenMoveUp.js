class ChickenUpCommand {
    constructor(chicken, timeStep) {
        this.chicken = chicken;
        this.timeStep = timeStep;
    }

    execute() {
        this.chicken.up = true;
    }

    undo() {
        this.chicken.up = false;
    }
}