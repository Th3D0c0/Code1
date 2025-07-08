namespace BallAnimation {
    const world = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    type Vector2 = { x: number; y: number };




    // The diameter of the ball, should match the CSS width/height
    const ballDiameter = 50;
    const numberOfBalls: number = 10;

    // The type for a single ball, now with its own position and velocity
    type Ball = {
        element: HTMLElement;
        position: Vector2;
        velocity: Vector2;
    };

    let balls: Ball[] = [];
    let timePreviousFrame: number = Date.now();

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        // The position where new balls will be created (center of the screen)
        const startPosition: Vector2 = { x: world.width / 2, y: world.height / 2 };

        for (let i = 0; i < numberOfBalls; i++) {
            const ballElement = document.createElement("span");
            // Add a 'ball' class for CSS styling
            ballElement.className = "ball";
            document.body.appendChild(ballElement);

            // Create a new ball object with its own state
            const ball: Ball = {
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
    function updateAnimation(): void {
        let timeCurrentFrame = Date.now();
        let deltaTime: number = (timeCurrentFrame - timePreviousFrame) / 1000;
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
        let blackHoleRef: HTMLImageElement = document.getElementById("blackHole") as HTMLImageElement;

        // Get the position and dimensions of the black hole relative to the viewport
        const rect = blackHoleRef.getBoundingClientRect();

        // Calculate the center point of the black hole
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Use the calculated center coordinates to find elements at that point
        const elementsAtPoint = document.elementsFromPoint(centerX, centerY);

        for (let element of elementsAtPoint) {
            if (element.tagName === "SPAN") {
                let targetParent = element.parentElement;
                targetParent?.removeChild(element);
            }
        }
        // This will now correctly include any span elements at the black hole's center.


        requestAnimationFrame(updateAnimation);
    }
    function getRandomInt(_min: number, _max: number) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }

    //Event listener for mouse clicks
    window.addEventListener("mousedown", onClick)
    function onClick(_event: MouseEvent) {
        let target: HTMLElement = _event.target as HTMLElement;

        if (target.tagName === "SPAN") {
            let targetParent = target.parentElement;
            targetParent?.removeChild(target);
        }
        if (target.tagName === "BODY") {
            const newSpan = document.createElement("span");
            newSpan.className = "ball";
            document.body.appendChild(newSpan);
            balls.push({ element: newSpan, position: { x: _event.screenX - 10, y: _event.screenY - 125 }, velocity: { x: getRandomInt(-500, 500), y: getRandomInt(-500, 500) } })
        }
    }



}