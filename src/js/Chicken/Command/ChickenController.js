class ChickenController {
    constructor(chicken) {
        this.chicken = chicken;
        this.commands = {};
    }

    setCommand(key, command) {
        this.commands[key] = command;
    }

    execute(key) {
        if(this.commands[key]) {
            this.commands[key].execute();
        }
    }

    undo(key) {
        if(this.commands[key]) {
            this.commands[key].undo();
        }
    }
}