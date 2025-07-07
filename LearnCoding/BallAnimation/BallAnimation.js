"use strict";
var BallAnimation;
(function (BallAnimation) {
    const world = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    console.log("Width: " + world["width"]);
    let startPositionX = 50;
    let startPositionY = 50;
    let currentPositionX = startPositionX;
    let currentPositionY = startPositionY;
    let velocityX = 5;
    let velocityY = 5;
    let ballRadius = 20;
    setLoctaion();
    //Function ----------------
    function setLoctaion() {
        const span = document.getElementById("span");
        if (!span) {
            return;
        }
        //Update Location
        currentPositionX += velocityX;
        currentPositionY += velocityY;
        span.style.left = (currentPositionX) + "px";
        span.style.top = (currentPositionY) + "px";
        //Check for Corners
        if (currentPositionX <= 0 || currentPositionX >= world.width - ballRadius) {
            velocityX *= -1;
        }
        if (currentPositionY <= 0 || currentPositionY >= world.height - ballRadius) {
            velocityY *= -1;
        }
        requestAnimationFrame(setLoctaion);
    }
})(BallAnimation || (BallAnimation = {}));
//# sourceMappingURL=BallAnimation.js.map