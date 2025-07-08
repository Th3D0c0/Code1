"use strict";
var BallAnimation;
(function (BallAnimation) {
    const world = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    let startTime = Date.now();
    // let gravitationalRadius: number = 100;
    // The diameter of the ball, should match the CSS width/height
    const ballDiameter = 25;
    const numberOfBalls = 10;
    let balls = [];
    let timePreviousFrame = Date.now();
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        // The position where new balls will be created (center of the screen)
        const startPosition = { x: world.width / 2, y: world.height / 2 };
        for (let i = 0; i < numberOfBalls; i++) {
            const ballElement = document.createElement("span");
            // Add a 'ball' class for CSS styling
            ballElement.className = "ball";
            document.body.appendChild(ballElement);
            // Create a new ball object with its own state
            const ball = {
                element: ballElement,
                // Use a copy of the start position
                position: { ...startPosition },
                // Give each ball a random initial velocity for a nice effect
                velocity: {
                    x: (Math.random() - 0.5) * 1000,
                    y: (Math.random() - 0.5) * 1000
                },
            };
            balls.push(ball);
        }
        // Start the animation loop
        requestAnimationFrame(updateAnimation);
    }
    // This function runs on every frame to update the animation
    function updateAnimation() {
        let timeCurrentFrame = Date.now();
        let deltaTime = (timeCurrentFrame - timePreviousFrame) / 1000;
        // Loop through every ball and update it individually
        for (const ball of balls) {
            // 1. Update the ball's position based on its own velocity
            ball.position.x += ball.velocity.x * deltaTime;
            ball.position.y += ball.velocity.y * deltaTime;
            // 2. Check for collision with the window edges
            // Horizontal collision (left and right walls)
            if (ball.position.x < 0 || ball.position.x + ballDiameter > world.width) {
                ball.velocity.x *= -1; // Reverse horizontal direction
                // Clamp position to prevent getting stuck in a wall
                ball.position.x = Math.max(0, Math.min(ball.position.x, world.width - ballDiameter));
            }
            // Vertical collision (top and bottom walls)
            if (ball.position.y < 0 || ball.position.y + ballDiameter > world.height) {
                ball.velocity.y *= -1; // Reverse vertical direction
                // Clamp position
                ball.position.y = Math.max(0, Math.min(ball.position.y, world.height - ballDiameter));
            }
            // 3. Apply the updated position to the ball's HTML element
            ball.element.style.left = ball.position.x + "px";
            ball.element.style.top = ball.position.y + "px";
        }
        timePreviousFrame = timeCurrentFrame;
        // Continue the animation on the next frame
        let blackHoleRef = document.getElementById("blackHole");
        // Get the position and dimensions of the black hole relative to the viewport
        const rect = blackHoleRef.getBoundingClientRect();
        // Calculate the center point of the black hole
        const blackHoleCenterX = rect.left + rect.width / 2;
        const blackHoleCenterY = rect.top + rect.height / 2;
        // Use the calculated center coordinates to find elements at that point
        const elementsAtPoint = document.elementsFromPoint(blackHoleCenterX, blackHoleCenterY);
        for (let element of elementsAtPoint) {
            if (element.tagName === "SPAN") {
                let targetParent = element.parentElement;
                targetParent?.removeChild(element);
            }
        }
        for (let ball of balls) {
            ball = gravitationCalc(blackHoleCenterX, blackHoleCenterY, ball);
            ball.element.style.left += ball.position.x + "px";
            ball.element.style.top += ball.position.y + "px";
        }
        if ((timeCurrentFrame - startTime) > 1000) {
            checkCollisionAll();
        }
        requestAnimationFrame(updateAnimation);
    }
    function getRandomInt(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    //Event listener for mouse clicks
    window.addEventListener("mousedown", onClick);
    function onClick(_event) {
        let target = _event.target;
        if (target.tagName === "SPAN") {
            let targetParent = target.parentElement;
            targetParent?.removeChild(target);
        }
        if (target.tagName === "BODY") {
            const newSpan = document.createElement("span");
            newSpan.className = "ball";
            document.body.appendChild(newSpan);
            balls.push({ element: newSpan, position: { x: _event.screenX - 10, y: _event.screenY - 125 }, velocity: { x: getRandomInt(-500, 500), y: getRandomInt(-500, 500) } });
        }
    }
    function gravitationCalc(_blackHoleCenterX, _blackHoleCenterY, _ball, gravitationalConstant = 10 // Adjust this for desired strength
    ) {
        // 1. Calculate the vector from the ball to the black hole
        const dx = _blackHoleCenterX - _ball.position.x;
        const dy = _blackHoleCenterY - _ball.position.y;
        // 2. Calculate the distance using the Pythagorean theorem
        const distanceSq = (dx * dx + dy * dy) * 0.01;
        const distance = Math.sqrt(distanceSq);
        // Avoid division by zero and extreme forces when the ball is too close
        if (distance < 1) {
            return _ball;
        }
        // 3. Calculate the force magnitude using the inverse square law
        // F = G * (m1 * m2) / r^2
        // We'll simplify by rolling G and masses into a single gravitationalConstant
        const forceMagnitude = gravitationalConstant / distanceSq;
        // 4. Calculate the normalized direction vector (a unit vector)
        const directionX = dx / distance;
        const directionY = dy / distance;
        // 5. Calculate the acceleration vector by applying the force to the direction
        const accelerationX = directionX * forceMagnitude;
        const accelerationY = directionY * forceMagnitude;
        // 6. Apply the acceleration to the ball's velocity
        _ball.velocity.x += accelerationX * 15;
        _ball.velocity.y += accelerationY * 15;
        return _ball;
    }
    function checkCollisionAll() {
        let collisionDistance = { x: 0, y: 0 };
        for (const a in balls) {
            for (let b = Number(a) + 1; b < balls.length; b++) {
                collisionDistance.x = balls[a].position.x - balls[b].position.x;
                collisionDistance.y = balls[a].position.y - balls[b].position.y;
                let distance = Math.sqrt(collisionDistance.x * collisionDistance.x + collisionDistance.y * collisionDistance.y);
                if (distance <= ballDiameter) {
                    balls[a].velocity.x *= -1;
                    balls[a].velocity.y *= -1;
                    balls[b].velocity.x *= -1;
                    balls[b].velocity.y *= -1;
                }
            }
        }
    }
})(BallAnimation || (BallAnimation = {}));
//# sourceMappingURL=BallAnimation.js.map