const stagesData = [
    { // Stage 1
        player: {
            initialPosition: { x: 385, y: 580 }
        },
        decorations: [
            {
                draw: () => {
                    for (let stripY = 80; stripY <= 538; stripY += 64) {
                        drawRect(World.canvas.clientWidth / 2 - 200, stripY, 400, 32, '#FCFDFD')
                    }

                    drawText(
                        `Use as setas ou os direcionais do controle para se mover`,
                        150, 630,
                        '20px arial',
                        4
                    )

                    drawText(
                        `Tente tocar na parede de cima de cada tela☝️`,
                        200, 30,
                        '20px arial',
                        4
                    )
                }
            }
        ],
        props: []
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
        props: [
            new Car(900, 80, .5, 160, 80, 1, new SingleCarPhysics()),
            new Car(900, 224, .5, 160, 80, 1, new SingleCarPhysics()),
            new Car(900, 352, .5, 160, 80, 1, new SingleCarPhysics()),
            new Car(900, 480, .5, 160, 80, 1, new SingleCarPhysics()),
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
        props: [
            new Car(-160, 80, .5, 160, 80, 1, new SingleCarPhysics(true)),
            new Car(-160, 192, .5, 160, 80, 1, new SingleCarPhysics(true)),
            new Car(900, 368, .5, 160, 80, 1, new SingleCarPhysics()),
            new Car(900, 480, .5, 160, 80, 1, new SingleCarPhysics()),
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
        props: [
            new Car(900, 80, .3, 160, 80, 1, new SingleCarPhysics()),
            new Car(900, 208, .3, 160, 80, 1, new SingleCarPhysics()),
            new Car(900*2, 352, .3, 160, 80, 1, new SingleCarPhysics()),
            new Car(900, 480, .3, 160, 80, 1, new SingleCarPhysics()),
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
        props: [
            new Car(900, 80, .4, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160, 208, .4, 160, 80, 1, new SingleCarPhysics(true)),
            new Car(900, 352, .4, 160, 80, 1, new SingleCarPhysics()),
            new Car(-160, 480, .4, 160, 80, 1, new SingleCarPhysics(true)),
            new BlockGarden(208, 575, 592, 64),
            new BlockGarden(0, 304, 592, 32),
            new BlockGarden(768, 304, 32, 32),
            new BlockGarden(208, 0, 592, 64),
        ],
    },
    { // Stage 6
        player: {
            initialPosition: {
                x: 200, y: 594
            }
        },
        decorations: [
            {
                draw: () => {
                    drawRect(0, 0, World.canvas.clientWidth, World.canvas.clientHeight, '#39693B')
                    drawText(
                        `Você finalmente chegou no outro lado 🥳`,
                        120, 50,
                        '30px arial',
                        4
                    )
                    drawText(
                        `...Mas não parece ter muita coisa por aqui 🐔`,
                        170, 90,
                        '20px arial',
                        4,
                        '#FCFDCD44'
                    )
                }
            }
        ],
        props: [
            new Car(-160, 0, 5, 160, 80, 1, new SurpriseCarPhysics())
        ],
    },
]