class Stage {
    constructor(world, data) {
        this.data = data;
        this.world = world;

        this.player = new Chicken(
            this.data.player.initialPosition.x,
            this.data.player.initialPosition.y,
            .2, 30, new ChickenPhysics()
        )

        this.entities = [...this.data.entities, this.player]
        this.decorations = this.data.decorations 
        this.zones = []
    }

    move(delta) {
        this.entities.forEach(entity => {
            entity.move(delta)
            if(entity != this.player) {
                this.player.verifyColisionWith(entity)
            }
        })
    }

    draw = () => {
        // Render World
        drawRect(0, 0, World.canvas.clientWidth, World.canvas.clientHeight, '#333')
        drawRect(0, 0, World.canvas.clientWidth, 64, '#6D5D6E')
        drawRect(0, World.canvas.clientHeight - 64, World.canvas.clientWidth, 64, '#6D5D6E')

        this.decorations.forEach(decoration => decoration.draw())
        this.entities.forEach(entity => entity.draw())
        // Zones
    }
}