namespace BallAnimation {
    const world = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    console.log("Width: " + world["width"])

    let startPositionX: number = 50;
    let startPositionY: number = 50;


    let velocityX: number = 5;
    let velocityY: number = 5;

    let ballRadius = 25;

    // let maxGenerations = 100;

    const parentBody = document.body;

    function spawnChild() {
        const child = document.createElement("span");
        parentBody.appendChild(child);
        setLoctaion(child);
        console.log("tick")
    }

    setInterval(spawnChild, 500)



    //Function ----------------
    function setLoctaion(_span: any): any {
        const span = _span;

        let currentPositionX: number = startPositionX;
        let currentPositionY: number = startPositionY;

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

        requestAnimationFrame(setLoctaion(_span));

    }
}