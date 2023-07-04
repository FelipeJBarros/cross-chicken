class BlockGarden {
    constructor(x, y, width, height, physicComponent = null) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.physicComponent = physicComponent
    }

    move(delta) {
        if(this.physicComponent) this.physicComponent.move(delta);
    }

    draw() {
        drawRect(this.x, this.y, this.width, this.height, '#FCFDFD')
        drawRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10, '#39693B')
    }
}