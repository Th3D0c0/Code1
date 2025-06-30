namespace CodeTest {

    let a: number;
    let b: number;
    let c: number;
    let d: number;

    let Player: boolean = false;

    a = Number(prompt("Fill Row 1"));
    b = Number(prompt("Fill Row 2"));
    c = Number(prompt("Fill Row 3"));
    d = Number(prompt("Fill Row 4"));

    gameLoop(a, b, c, d, Player);


    function gameLoop(_a: number, _b: number, _c: number, _d: number, _Player: boolean) {
        displayState(_a, _b, _c, _d, _Player);
        gameAction(_a, _b, _c, _d);



    }





    function gameAction(_a: number, _b: number, _c: number, _d: number) {
        let userRowSelection: number = promptRowUserInput();

        console.log(userRowSelection)

        switch (userRowSelection) {
            case 1: ;
        }

    }


    function promptNumberUserInput(){
        let input: number = (Number(prompt("What Row to select?")));

        if (checkGameActionInput(input) == true) {
            return input;
        }
        else {
            return promptRowUserInput();
        }
    } 


    function  promptRowUserInput() {
        let input: number = (Number(prompt("What Row to select?")));

        if (checkGameActionInput(input) == true) {
            return input;
        }
        else {
            return promptRowUserInput();
        }
    };


    function checkGameActionInput(_Input: number) {
        if (_Input < 1 || _Input > 4) {
            return false;
        }
        else {
            return true;
        }
    }


    function displayState(_a: number, _b: number, _c: number, _d: number, _Player: boolean) {
        if (Player == false) {
            console.log("Current Player: --YOU-- ");
        }
        else {
            console.log("Current Player: --AI-- ");
        }
        console.log("_________________________________________________________");
        console.log("Current Row 1: ", _a);
        console.log("_________________________________________________________");
        console.log("Current Row 2: ", _b);
        console.log("_________________________________________________________");
        console.log("Current Row 3: ", _c);
        console.log("_________________________________________________________");
        console.log("Current Row 4: ", _d);
        console.log("_________________________________________________________");
    }





}