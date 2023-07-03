const stagesData = [
    { // Stage 1
        player: {
            initialPosition: { x: 385, y: 600 }
        },
        decorations: [
            {
                draw: () => {
                    for (let stripY = 80; stripY <= 538; stripY += 64) {
                        drawRect(World.canvas.clientWidth / 2 - 200, stripY, 400, 32, '#FCFDFD')
                    }
                }
            }
        ],
        entities: []
    },
    { // Stage 2
        player: {
            initialPosition: { x: 385, y: 600 }
        },
        decorations: [
            {
                draw: () => {
                    World.canvasContext.setLineDash([60, 30]);
                    drawLine(
                        [0, World.canvas.clientHeight / 2],
                        [World.canvas.clientWidth, World.canvas.clientHeight / 2],
                        16, '#FCFDFD'
                    )
                }
            }
        ],
        entities: [
            new Car(-160, 80, .5, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160*2, 192, .5, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160, 368, .5, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160*4, 480, .5, 160, 80, 1, new SingleCarPhysics()),
        ]
    },
    { // Stage 3
        player: {
            initialPosition: { x: 385, y: 600 }
        },
        decorations: [
            {
                draw: () => {
                    World.canvasContext.setLineDash([60, 30]);
                    drawLine(
                        [0, World.canvas.clientHeight / 2],
                        [World.canvas.clientWidth, World.canvas.clientHeight / 2],
                        16, '#F9B402'
                    )
                }
            }
        ],
        entities: [
            new Car(-160, 80, .6, 160, 80, 1, new SingleCarPhysics(true)),
            new Car(-160*2, 192, .5, 160, 80, 1, new SingleCarPhysics(true)),
            new Car(-160, 368, .6, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160*4, 480, .5, 160, 80, 1, new SingleCarPhysics()),
        ]
    },
    { // Stage 4
        player: {
            initialPosition: { x: 685, y: 594 }
        },
        decorations: [
            {
                draw: () => {
                    drawRect(0, 304, World.canvas.clientWidth, 32, '#6E557D')
                }
            }
        ],
        entities: [
            new Car(-160*1, 80, .4, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160*3, 192, .4, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160*2, 368, .4, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160, 480, .4, 160, 80, 1, new SingleCarPhysics()),
            new BlockGarden(0, 575, 592, 64),
            new BlockGarden(0, 304, 32, 32),
            new BlockGarden(303, 304, 497, 32),
            new BlockGarden(0, 0, 592, 64),
        ]
    },
    { // Stage 5
        player: {
            initialPosition: { x: 85, y: 594 }
        },
        decorations: [
            {
                draw: () => {
                    drawRect(0, 304, World.canvas.clientWidth, 32, '#6E557D')
                }
            }
        ],
        entities: [
            new Car(-160*1, 80, .4, 160, 80, 1, new SingleCarPhysics(true)),
            new Car(-160*3, 192, .4, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160*2, 368, .4, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160, 480, .4, 160, 80, 1, new SingleCarPhysics(true)),
            new BlockGarden(208, 575, 592, 64),
            new BlockGarden(0, 304, 592, 32),
            new BlockGarden(768, 304, 32, 32),
            new BlockGarden(208, 0, 592, 64),
        ]
    },
]