namespace BallAnimation{
    const world = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    type Vector2 = {x: number, y: number};

    let startPosition: Vector2 = {x: 50, y:50}
    let currentPosition: Vector2 = startPosition;
    let Velocity: Vector2 = {x: 3, y: 3}
    let ballRadius = 80;
    let numberOfBalls: number = 100

        type Ball = {
        element:HTMLElement,
        currentPositionX: number,
        currentPositionY: number,
        VelocityX: number,
        VelocityY:number,
    }

    let balls: Ball[] = [];

    window.addEventListener("load", handleLoad)
    function handleLoad(){
        for(let i: number = 0; i < numberOfBalls; i++)
        {   
            const ball:Ball = {
            element: document.createElement("span") as HTMLElement,
            currentPositionX: startPosition.x,
            currentPositionY: startPosition.x,
            VelocityX: Velocity.x,
            VelocityY: Velocity.y
            };
            document.body.appendChild(ball.element)
            balls.push(ball)
        }
        setLoctaion();
    }

    //Function ----------------
    function setLoctaion():void{

        for(const ball of balls)
        //Update Location
        {        
        currentPosition.x += Velocity.x;
        currentPosition.y += Velocity.y;
        ball.element.style.left = (currentPosition.x) + "px";
        ball.element.style.top = (currentPosition.y) + "px";

        //Check for Corners
        if(currentPosition.x <= 0 || currentPosition.x >= world.width - ballRadius){
            Velocity.x *= -1;
        }
        if(currentPosition.y <= 0 || currentPosition.y >= world.height - ballRadius){
            Velocity.y *= -1;
        }
        }


        requestAnimationFrame(setLoctaion);
    }
}