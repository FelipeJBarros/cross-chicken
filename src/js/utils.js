const drawRect = (x, y, width, height, color) => {
    World.canvasContext.fillStyle = color
    World.canvasContext.fillRect(x, y, width, height)
}

const drawLine = (from, to, width, color) => {
    World.canvasContext.strokeStyle = color
    World.canvasContext.lineWidth = width
    World.canvasContext.beginPath();
    World.canvasContext.moveTo(from[0], from[1]);
    World.canvasContext.lineTo(to[0], to[1]);
    World.canvasContext.closePath();
    World.canvasContext.stroke();
}

const getRandom = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min) + min)
}