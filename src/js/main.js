//Game
let canvas, canvasContext;

let lastFrameTimeMS = 0;
let FPS = 60;
let timeStep = 1000/FPS;

let lastTime = 0, FPSCounter = 0;
let delta = 0;

const chicken = new Chicken(385, 560, .2, 30);
const car = new Car(200, 150, .8, 160, 80, '#A31000');

const entities = [car, chicken]

const drawRoad = () => {
    drawRect(0, 0, canvas.clientWidth, canvas.clientHeight, '#333')
    drawRect(0, 0, canvas.clientWidth, 80, '#6D5D6E')

    canvasContext.setLineDash([60, 30]);
    drawLine(
        [0, canvas.clientHeight / 2 - 5],
        [canvas.clientWidth, canvas.clientHeight / 2 - 5],
        10, '#E7B10A'
    )

    drawRect(0, canvas.clientHeight - 80, canvas.clientWidth, 80, '#6D5D6E')
}

const move = (delta) => {
    entities.forEach(entity => entity.move(delta));
    chicken.verifyColisionWith(car);
}

const draw = () => {
    drawRoad();
    entities.forEach(entity => entity.draw());
}

const mainLoop = (timeStamp) => {
    if(!lastTime) lastTime = Date.now();
    FPSCounter += 1;

    if(timeStamp < lastFrameTimeMS + timeStep) {
        requestAnimationFrame(mainLoop);
        return;
    }
    delta += timeStamp - lastFrameTimeMS;
    lastFrameTimeMS = timeStamp;
    while(delta >= timeStep) {
        move(timeStep);
        delta -= timeStep;
    }
    draw();

    if((Date.now() - lastTime) > 1000) {
        lastTime = Date.now();
        console.clear()
        console.log(`FPS: ${FPSCounter}`);
        FPSCounter = 0;
    }

    requestAnimationFrame(mainLoop);
}

window.onload = () => {
    canvas = document.querySelector('#game');
    canvasContext = canvas.getContext('2d');
    requestAnimationFrame(mainLoop);
}

window.onkeydown = KeyboardInput.onKeyPressed;
window.onkeyup = KeyboardInput.onKeyReleased;

