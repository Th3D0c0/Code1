"use strict";
var BallAnimation;
(function (BallAnimation) {
    const world = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    let startPosition = { x: 50, y: 50 };
    let currentPosition = startPosition;
    let Velocity = { x: 3, y: 3 };
    let ballRadius = 80;
    let numberOfBalls = 100;
    let balls = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        for (let i = 0; i < numberOfBalls; i++) {
            const ball = {
                element: document.createElement("img"),
                currentPositionX: startPosition.x,
                currentPositionY: startPosition.x,
                VelocityX: Velocity.x,
                VelocityY: Velocity.y
            };
            document.body.appendChild(ball.element);
            balls.push(ball);
        }
        setLoctaion();
    }
    //Function ----------------
    function setLoctaion() {
        for (const ball of balls) 
        //Update Location
        {
            currentPosition.x += Velocity.x;
            currentPosition.y += Velocity.y;
            ball.element.style.left = (currentPosition.x) + "px";
            ball.element.style.top = (currentPosition.y) + "px";
            //Check for Corners
            if (currentPosition.x <= 0 || currentPosition.x >= world.width - ballRadius) {
                Velocity.x *= -1;
            }
            if (currentPosition.y <= 0 || currentPosition.y >= world.height - ballRadius) {
                Velocity.y *= -1;
            }
        }
        requestAnimationFrame(setLoctaion);
    }
})(BallAnimation || (BallAnimation = {}));
//# sourceMappingURL=BallAnimation.js.map