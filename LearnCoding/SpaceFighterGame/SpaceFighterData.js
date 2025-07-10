"use strict";
var SpaceFighter;
(function (SpaceFighter) {
    // variables
    let timePreviousFrame = 0;
    const keys = {};
    let player;
    // Event Listeners
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    // Add Event Handlers
    function handleKeyDown(_event) {
        keys[_event.key] = true;
    }
    function handleKeyUp(_event) {
        keys[_event.key] = false;
    }
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", handleOnMouseMove);
        player = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: 0,
            rotation: 0
        };
        main(0);
    }
    function handleOnMouseMove(_event) {
        player.velocity = 0;
    }
    // Main Function
    function main(_time) {
        let timeDelta;
        timeDelta = _time - timePreviousFrame;
        timeDelta /= 1000;
        processInput();
        timePreviousFrame = _time;
        requestAnimationFrame(main);
    }
    SpaceFighter.main = main;
    //Input Hnadling
    function processInput() {
        if (keys["w"]) {
        }
        else if (keys["s"]) {
        }
        if (!keys["w"] && !keys["s"]) {
        }
    }
    //     function createMatrix(_translation: Vector2, _rotation: number, _scale: Vector2): string {
    //         const sin: number = Math.sin(Math.PI * _rotation / 180);
    //         const cos: number = Math.cos(Math.PI * _rotation / 180);
    //         const matrix: number[] = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];
    //         return "Matrix(" + matrix.toString() + ")";
    //     }
})(SpaceFighter || (SpaceFighter = {}));
//# sourceMappingURL=SpaceFighterData.js.map