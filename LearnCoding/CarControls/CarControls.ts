namespace CarControl {
    

    type Vector2 = { x: number; y: number };

    type Tank = {
        element: HTMLElement;
        position: Vector2;
        velocity: Vector2;
        rotation: 0
    };

    let tank: Tank;

    window.addEventListener("load", handleLoad);
    window.addEventListener("keydown", moveCar);

    function handleLoad() {
         tank = {
            element: document.createElement("SPAN"),
            position: { x: 100, y: 100 },
            velocity: { x: 0, y: 0 },
            rotation: 0
        }
        updateloop();
    }

    function updateloop(): void {
        moveCar()
        requestAnimationFrame(updateloop)
    }


    function moveCar(): void {
        tank.rotation += 1;
        const matrix: string = createMatrix(tank.position, tank.rotation, { x: 40, y: 20 });
        tank.element.style.transform = matrix;
    }



    function createMatrix(_translation: Vector2, _rotation: number, _scale: Vector2): string {
        const sin: number = Math.sin(Math.PI * _rotation / 180);
        const cos: number = Math.cos(Math.PI * _rotation / 180);
        const matrix: number[] = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y]
        return "Matrix(" + matrix.toString() + ")";
    }
}