"use strict";
var CodeTest;
(function (CodeTest) {
    let a;
    let b;
    let c;
    let d;
    let Player = false;
    a = Number(prompt("Fill Row 1"));
    b = Number(prompt("Fill Row 2"));
    c = Number(prompt("Fill Row 3"));
    d = Number(prompt("Fill Row 4"));
    gameLoop(a, b, c, d, Player);
    function gameLoop(_a, _b, _c, _d, _Player) {
        displayState(_a, _b, _c, _d, _Player);
        gameAction(_a, _b, _c, _d);
    }
    function gameAction(_a, _b, _c, _d) {
        let userRowSelection = promptRowUserInput();
        console.log(userRowSelection);
        switch (userRowSelection) {
            case 1: ;
        }
    }
    function promptNumberUserInput() {
        let input = (Number(prompt("What Row to select?")));
        if (checkGameActionInput(input) == true) {
            return input;
        }
        else {
            return promptRowUserInput();
        }
    }
    function promptRowUserInput() {
        let input = (Number(prompt("What Row to select?")));
        if (checkGameActionInput(input) == true) {
            return input;
        }
        else {
            return promptRowUserInput();
        }
    }
    ;
    function checkGameActionInput(_Input) {
        if (_Input < 1 || _Input > 4) {
            return false;
        }
        else {
            return true;
        }
    }
    function displayState(_a, _b, _c, _d, _Player) {
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
})(CodeTest || (CodeTest = {}));
