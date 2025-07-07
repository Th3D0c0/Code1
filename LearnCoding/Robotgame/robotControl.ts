/**
 * This namespace contains the functions required to control the Droid.
 * @author Jirka Dell'Oro-Friedl | Hochschule Furtwangen University | 2024
 */
export namespace DroidController {
    // This object stores the state of our droid's behavior.
    // It persists between calls to getCommand.
    let state: {
        task: string;
        step: number;
        path: { x: number, z: number }[];
        pathIndex: number;
    } = {
        task: "perimiter", // Current task being executed
        step: 0,           // Current step in a sequence of actions
        path: [],          // A calculated path for the droid to follow
        pathIndex: 0       // The current position in the path
    };

    /**
     * This function is called by the Droid for each command.
     * @param _droidState The current state of the Droid (e.g., position, orientation)
     * @returns A command for the Droid to execute
     */
    export function getCommand(_droidState: { position: { x: number, z: number }, orientation: number }): { module: string, method: string, data: string } | null {
        // You can choose the active task by changing the "task" value in the state object.
        // Available tasks: "move", "sequence", "random", "perimeter"

        switch (state.task) {
            case "move":
                return moveSomehow();
            case "sequence":
                return moveInSequence();
            case "random":
                return moveRandomly();
            case "perimeter":
                return followPerimeter(_droidState);
            default:
                return null; // No command
        }
    }

    // Task 1: Make the droid move somehow
    function moveSomehow(): { module: string, method: string, data: string } {
        // Always moves forward
        return { module: "Chassis", method: "move", data: "forward" };
    }

    // Task 2: Move in an endless sequence of moving one tile forward, then turn to the left
    function moveInSequence(): { module: string, method: string, data: string } {
        state.step++;
        if (state.step % 2 == 1) {
            return { module: "Chassis", method: "move", data: "forward" };
        } else {
            return { module: "Chassis", method: "turn", data: "left" };
        }
        
    }

    // Task 3: Make the droid move randomly
    function moveRandomly(): { module: string, method: string, data: string } {
        const commands = [
            { module: "Chassis", method: "move", data: "forward" },
            { module: "Chassis", method: "turn", data: "left" },
            { module: "Chassis", method: "turn", data: "right" }
        ];
        const randomIndex = Math.floor(Math.random() * commands.length);
        return commands[randomIndex];
    }

    // Task 4: Leave initial space, drive the outer perimeter, then park back in the center
    function followPerimeter(_droidState: { position: { x: number, z: number }, orientation: number }): { module: string, method: string, data: string } | null {
        // Define the perimeter path (assuming a 5x5 grid for this example)
        // Adjust the coordinates based on the actual size of your tile set.
        if (state.path.length === 0) {
            state.path = [
                // Leave center
                { x: 0, z: 1 },
                // Move to corner
                { x: 2, z: 1 }, { x: 2, z: 2 },
                // Drive perimeter
                { x: -2, z: 2 }, { x: -2, z: -2 }, { x: 2, z: -2 }, { x: 2, z: 0 },
                // Return to center
                { x: 0, z: 0 }
            ];
        }

        const target = state.path[state.pathIndex];
        if (!target) return null; // Path complete

        const currentPosition = _droidState.position;
        const dx = target.x - currentPosition.x;
        const dz = target.z - currentPosition.z;

        // If at the target, move to the next target
        if (dx === 0 && dz === 0) {
            state.pathIndex++;
            return getCommand(_droidState); // Recursive call to handle next step immediately
        }

        // Determine required orientation
        let requiredOrientation = 0;
        if (dz > 0) requiredOrientation = 0;      // North
        else if (dx > 0) requiredOrientation = 90;   // East
        else if (dz < 0) requiredOrientation = 180; // South
        else if (dx < 0) requiredOrientation = 270; // West

        // If not oriented correctly, turn
        if (_droidState.orientation !== requiredOrientation) {
            // A simple turn logic, can be improved for efficiency (e.g., shortest turn)
            return { module: "Chassis", method: "turn", data: "left" };
        }

        // If oriented correctly, move forward
        return { module: "Chassis", method: "move", data: "forward" };
    }
}