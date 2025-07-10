"use strict";
var SpaceFighter;
(function (SpaceFighter) {
    // variables
    let timePreviousFrame = 0;
    const keys = {};
    let player;
    let cannon;
    const playerSpeed = 250;
    const playerSize = 100;
    const cannonSize = 50;
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
    function handleOnMouseMove(_event) {
        // Calculate vector from player's center to the mouse cursor
        const dx = _event.clientX - player.position.x;
        const dy = _event.clientY - player.position.y;
        // Calculate the angle and convert it from radians to degrees
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        // Add 90 degrees to compensate for the cannon image pointing upwards
        cannon.rotation = angle + 90;
    }
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", handleOnMouseMove);
        // Setup and initilize player
        player = {
            element: document.createElement("img"),
            position: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
            velocity: { x: 0, y: 0 },
            rotation: 0
        };
        player.element.src = "img/SpaceShip.png";
        player.element.id = "spaceShip";
        document.body.appendChild(player.element);
        // Setup and initialize cannon
        cannon = {
            element: document.createElement("img"),
            position: { x: player.position.x, y: player.position.y },
            velocity: { x: 0, y: 0 },
            rotation: 0
        };
        cannon.element.src = "img/cannon.png";
        cannon.element.id = "cannon";
        // ★★★ THIS IS THE FIX ★★★
        // The pivot point must match the cannon's base, not the center.
        cannon.element.style.transformOrigin = "50% 85%";
        document.body.appendChild(cannon.element);
        main(0);
    }
    // Main Function
    function main(_time) {
        let timeDelta;
        timeDelta = _time - timePreviousFrame;
        timeDelta /= 1000;
        processKeysInput();
        moveSpaceShip(timeDelta);
        timePreviousFrame = _time;
        requestAnimationFrame(main);
    }
    SpaceFighter.main = main;
    //Input Hnadling
    function processKeysInput() {
        for (const key in keys) {
            if (key == "w" && keys[key] == true) {
                player.velocity.y -= playerSpeed;
                break;
            }
            ;
            if (key == "s" && keys[key] == true) {
                player.velocity.y += playerSpeed;
                break;
            }
            if (key == "a" && keys[key] == true) {
                player.velocity.x -= playerSpeed;
                break;
            }
            ;
            if (key == "d" && keys[key] == true) {
                player.velocity.x += playerSpeed;
                break;
            }
        }
    }
    function moveSpaceShip(_timeDelta) {
        player.position.x += player.velocity.x * _timeDelta;
        player.position.y += player.velocity.y * _timeDelta;
        player.velocity = { x: 0, y: 0 };
        // Use a simple and clear transform for the player
        const playerX = player.position.x - playerSize / 2;
        const playerY = player.position.y - playerSize / 2;
        player.element.style.transform = `translate(${playerX}px, ${playerY}px) scale(${playerSize})`;
        // Sync cannon's logical position with the player's
        cannon.position.x = player.position.x;
        cannon.position.y = player.position.y;
        // This calculation finds the top-left corner needed to place the cannon's pivot on the player
        const cannonX = cannon.position.x - cannonSize * 0.5; // 50% of the width
        // ★★★ THIS IS THE FIX ★★★
        // Instead of subtracting half the size (0.5), subtract 85% of the size to match the transform-origin.
        const cannonY = cannon.position.y - cannonSize * 0.85; // 85% of the height
        const cannonTransform = `
        translate(${cannonX}px, ${cannonY}px)
        rotate(${cannon.rotation}deg)
        scale(${cannonSize})
    `;
        cannon.element.style.transform = cannonTransform;
    }
})(SpaceFighter || (SpaceFighter = {}));
//# sourceMappingURL=SpaceFighter.js.map