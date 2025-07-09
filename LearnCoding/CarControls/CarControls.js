"use strict";
var CarControl;
(function (CarControl) {
    let timePreviousFrame = 0;
    const keys = {};
    let tank;
    window.addEventListener("load", handleLoad);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    function handleLoad() {
        tank = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: 0,
            rotation: 0
        };
        document.body.appendChild(tank.element);
        document.addEventListener("mousemove", handleMouseMove);
        updateloop(0);
    }
    function handleKeyDown(_event) {
        keys[_event.key] = true;
    }
    function handleKeyUp(_event) {
        keys[_event.key] = false;
    }
    //Handle Mouse Movement
    function handleMouseMove(_event) {
        tank.rotation += _event.movementX;
    }
    //Updating the main Loop
    function updateloop(_time) {
        let timeDelta;
        timeDelta = _time - timePreviousFrame;
        timeDelta /= 1000;
        processInput();
        RotateCar(timeDelta);
        timePreviousFrame = _time;
        requestAnimationFrame(updateloop);
    }
    function processInput() {
        if (keys["w"]) {
            tank.velocity = 100;
        }
        else if (keys["s"]) {
            tank.velocity = -100;
        }
    }
    // function isKeyDown(_key: string) {
    // }
    //Rotating the car
    function RotateCar(_timeDelta) {
        const radians = Math.PI * tank.rotation / 180;
        tank.position.x += tank.velocity * Math.cos(radians) * _timeDelta;
        tank.position.y += tank.velocity * Math.sin(radians) * _timeDelta;
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