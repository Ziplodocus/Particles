let resizeId;
let canvasSize = {
    width: getComputedStyle(canvas).width.replace('px',''),
    height: getComputedStyle(canvas).height.replace('px',''),
    area() {
        return this.width * this.height
    }
}

function resizeCanvas() {

    let newCanvasSize = {
        width: getComputedStyle(canvas).width.replace('px',''),
        height: getComputedStyle(canvas).height.replace('px',''),
        area() {
            return this.width * this.height
        }
    }


    particles.forEach(particle => {
        particle._x = particle.x * (newCanvasSize.width / canvasSize.width);
        particle._y = particle.y * (newCanvasSize.height / canvasSize.height);
        let sizeRatio = newCanvasSize.area() / canvasSize.area();
        particle._vicinity * sizeRatio;
        particle._radius * sizeRatio;
    })
 

    canvas.height = Math.floor(resolutionModifier * newCanvasSize.height);
    canvas.width = Math.floor(resolutionModifier * newCanvasSize.width);

    canvasSize = newCanvasSize;
    
}

function resize() {
    clearTimeout(resizeId);
    resizeId = setTimeout(resizeCanvas, 500);
}

resizeCanvas();
window.addEventListener('resize', resize);
