class Stage {
    constructor(world, data) {
        this.data = data;
        this.world = world;

        this.player = new Chicken(
            this.data.player.initialPosition.x,
            this.data.player.initialPosition.y,
            .4, 30, 
            new ChickenPhysics(),
            new ChickenGraphics(),
            world,
        )

        this.props = [...this.data.props, this.player]
        this.decorations = this.data.decorations 
    }

    move(delta) {
        this.props.forEach(prop => {
            prop.move(delta, this.world)
            if(prop != this.player) {
                this.player.verifyColisionWith(prop)
            }
        })
    }

    draw = () => {
        drawRect(0, 0, World.canvas.clientWidth, World.canvas.clientHeight, '#333')
        drawRect(0, 0, World.canvas.clientWidth, 64, '#6D5D6E')
        drawRect(0, World.canvas.clientHeight - 64, World.canvas.clientWidth, 64, '#6D5D6E')

        this.decorations.forEach(decoration => decoration.draw())
        this.props.forEach(prop => prop.draw())
    }
}