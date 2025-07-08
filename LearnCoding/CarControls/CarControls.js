"use strict";
var CarControl;
(function (CarControl) {
    let tank;
    window.addEventListener("load", handleLoad);
    window.addEventListener("keydown", moveCar);
    function handleLoad() {
        tank = {
            element: document.createElement("SPAN"),
            position: { x: 100, y: 100 },
            velocity: { x: 0, y: 0 },
            rotation: 0
        };
        updateloop();
    }
    function updateloop() {
        moveCar();
        requestAnimationFrame(updateloop);
    }
    function moveCar() {
        tank.rotation += 1;
        const matrix = createMatrix(tank.position, tank.rotation, { x: 40, y: 20 });
        tank.element.style.transform = matrix;
    }
    function createMatrix(_translation, _rotation, _scale) {
        const sin = Math.sin(Math.PI * _rotation / 180);
        const cos = Math.cos(Math.PI * _rotation / 180);
        const matrix = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];
        return "Matrix(" + matrix.toString() + ")";
    }
})(CarControl || (CarControl = {}));
//# sourceMappingURL=CarControls.js.map