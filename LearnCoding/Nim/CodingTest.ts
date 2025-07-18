namespace CodeTest {

    let a: number;
    let b: number;
    let c: number;
    let d: number;

    let player: boolean = false;

    a = Number(prompt("Fill Row 1"));
    b = Number(prompt("Fill Row 2"));
    c = Number(prompt("Fill Row 3"));
    d = Number(prompt("Fill Row 4"));

     
    gameLoop(a, b, c, d, player);
   


    function gameLoop(_a: number, _b: number, _c: number, _d: number, _player: boolean) {
        
        displayState(_a, _b, _c, _d, _player);
        let CurrentSelectedRow: number = getRow(_a, _b, _c, _d);
        let UpdatedLights: number = promptNumberUserInput(_a, _b, _c, _d, CurrentSelectedRow);

        //Change Row Values
        switch(CurrentSelectedRow){
            case 1:{
                _a = UpdatedLights;
                break;
            }
            case 2:{
                _b = UpdatedLights;
                break;
            }
            case 3:{
                _c = UpdatedLights;
                break;
            }    
            case 4:{
                _d = UpdatedLights;
                break;
            }
        }

        if(checkWinner(_a, _b, _c, _d) == true) {
            if (_player == false){
                console.log(_a)
                console.log("Player 1 has won the game");
                
            }
            else{
                console.log("Player 2 has won the game");
                
            }
        }
        else{
            player = !_player;
            console.log(_player);
            gameLoop(_a, _b, _c, _d, _player);
        }

    }


    function checkWinner(_a: number, _b: number, _c: number, _d: number,): boolean{
        const calculationResult: number = _a + _b + _c + _d;
        let winnerResult: boolean;


        if (calculationResult == 0){
            winnerResult = true;
        }
        else{
            winnerResult = false;
        }
         return winnerResult
    }


    function getRow(_a: number, _b: number, _c: number, _d: number): number {
        let userRowSelection: number = promptRowUserInput();

        console.log(userRowSelection)

        switch (userRowSelection) {
            case 1: {console.log("Currently Selected Row 1")
                break;
            };
            case 2: {console.log("Currently Selected Row 2")
                break;
            };
            case 3: {console.log("Currently Selected Row 3")
                break;
            };
            case 4: {console.log("Currently Selected Row 4")
                break;
            };

        }
         return userRowSelection;

    }


    function promptNumberUserInput(_a: number, _b: number, _c:number, _d:number, _currentSelectedRow: number): number{
        let input: number = (Number(prompt("How many lights to remove on line " + _currentSelectedRow)));
        let result: number;
        switch(_currentSelectedRow){
            //Work in Progress !!!!!!!!!!!!!!!!!!!!!!
            case 1: {
                result = _a - input
                break;
            }

            case 2: {
                result =_b- input
                break;
            }

            case 3: {
                result = _c - input
                break;
            }
            case 4: {
                result = _d - input;
                break;
            }
            

            default:  result = -1;
        }
        return result;
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
        if (_Player == false) {
            console.log("Current Player: --Player 1-- ");
        }
        else if(_Player == true) {
            console.log("Current Player: --Player 2-- ");
        }
        console.log("_________________________________________________________");
        console.log("Current Row 1: "+ _a);
        console.log("_________________________________________________________");
        console.log("Current Row 2: "+ _b);
        console.log("_________________________________________________________");
        console.log("Current Row 3: "+ _c);
        console.log("_________________________________________________________");
        console.log("Current Row 4: "+ _d);
        console.log("_________________________________________________________");
    }


}