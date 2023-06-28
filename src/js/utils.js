const drawRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}

const drawLine = (from, to, width, color) => {
    canvasContext.strokeStyle = color
    canvasContext.lineWidth = width
    canvasContext.beginPath();
    canvasContext.moveTo(from[0], from[1]);
    canvasContext.lineTo(to[0], to[1]);
    canvasContext.closePath();
    canvasContext.stroke();
}