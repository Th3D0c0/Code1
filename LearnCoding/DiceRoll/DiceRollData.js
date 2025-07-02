"use strict";
var DiceRoll;
(function (DiceRoll) {
    DiceRoll.currentDieData = { "d4": 0, "d6": 0, "d8": 0, "d10": 0, "d12": 0, "d20": 0 };
    DiceRoll.maxDieData = { "d4": 4, "d6": 6, "d8": 8, "d10": 10, "d12": 12, "d20": 20 };
    DiceRoll.numberStash = { "d4": [], "d6": [], "d8": [], "d10": [], "d12": [], "d20": [] };
    //Roll Output Variables
    DiceRoll.rollSum = 0;
    DiceRoll.rollAverage = 0;
    DiceRoll.minimal = Infinity;
    DiceRoll.maximal = -Infinity;
    DiceRoll.Median = 0;
    //Functions
    function selectDieType() {
        let userInput = parseInt(prompt("What Die to choose: (1):D4, (2):D6, (3):D8, (4):D10, (5):D12, (6): D20, (0): Start Simulation") || "-1");
        let userDiceDecition = "0";
        switch (userInput) {
            case -1: {
                selectDieType();
                break;
            }
            case 1: {
                userDiceDecition = "d4";
                break;
            }
            case 2: {
                userDiceDecition = "d6";
                break;
            }
            case 3: {
                userDiceDecition = "d8";
                break;
            }
            case 4: {
                userDiceDecition = "d10";
                break;
            }
            case 5: {
                userDiceDecition = "d12";
                break;
            }
            case 6: {
                userDiceDecition = "d20";
                break;
            }
        }
        return userDiceDecition;
    }
    DiceRoll.selectDieType = selectDieType;
    function selectionDieAmount(_dieType) {
        let userAmountInput = parseInt(prompt("How many " + _dieType + " do you want? ") || "-1");
        return userAmountInput;
    }
    DiceRoll.selectionDieAmount = selectionDieAmount;
    function saveData(_dieType, _dieAmount) {
        DiceRoll.currentDieData[_dieType] += _dieAmount;
    }
    DiceRoll.saveData = saveData;
    function startSimulation(_currentDieData, _maxDieData) {
        for (const key in _currentDieData) {
            switch (key) {
                case "d4":
                    for (let i = 0; i < _currentDieData[key]; i++) {
                        let localDieStorage = getRandomInt(1, 4);
                        //Sum up Values
                        DiceRoll.rollSum += localDieStorage;
                        //Stash the current Value
                        DiceRoll.numberStash[key].push(localDieStorage);
                    }
                    break;
                case "d6":
                    for (let i = 0; i < _currentDieData[key]; i++) {
                        let localDieStorage = getRandomInt(1, 6);
                        //Sum up Values
                        DiceRoll.rollSum += localDieStorage;
                        //Stash the current Value
                        DiceRoll.numberStash[key].push(localDieStorage);
                    }
                    break;
                case "d8":
                    for (let i = 0; i < _currentDieData[key]; i++) {
                        let localDieStorage = getRandomInt(1, 8);
                        //Sum up Values
                        DiceRoll.rollSum += localDieStorage;
                        //Stash the current Value
                        DiceRoll.numberStash[key].push(localDieStorage);
                    }
                    break;
                case "d10":
                    for (let i = 0; i < _currentDieData[key]; i++) {
                        let localDieStorage = getRandomInt(1, 10);
                        //Sum up Values
                        DiceRoll.rollSum += localDieStorage;
                        //Stash the current Value
                        DiceRoll.numberStash[key].push(localDieStorage);
                    }
                    break;
                case "d12":
                    for (let i = 0; i < _currentDieData[key]; i++) {
                        let localDieStorage = getRandomInt(1, 12);
                        //Sum up Values
                        DiceRoll.rollSum += localDieStorage;
                        //Stash the current Value
                        DiceRoll.numberStash[key].push(localDieStorage);
                    }
                    break;
                case "d20":
                    for (let i = 0; i < _currentDieData[key]; i++) {
                        let localDieStorage = getRandomInt(1, 20);
                        //Sum up Values
                        DiceRoll.rollSum += localDieStorage;
                        //Stash the current Value
                        DiceRoll.numberStash[key].push(localDieStorage);
                    }
                    break;
            }
        }
        //Calculate the number of dice rolls
        let amountOfEntries = 0;
        for (const key in DiceRoll.numberStash) {
            // Get the array for the current key
            const currentArray = DiceRoll.numberStash[key];
            // Get the number of entries using .length
            amountOfEntries += currentArray.length;
        }
        //calculate the average
        DiceRoll.rollAverage = DiceRoll.rollSum / amountOfEntries;
        //calculating minimal and maximal value
        for (const key in DiceRoll.numberStash) {
            for (let i = 0; i < DiceRoll.numberStash[key].length; i++) {
                let currentRoll = DiceRoll.numberStash[key][i];
                if (currentRoll > DiceRoll.maximal) {
                    DiceRoll.maximal = currentRoll;
                }
                if (currentRoll < DiceRoll.minimal) {
                    DiceRoll.minimal = currentRoll;
                }
            }
        }
        //Calculate the Median
        DiceRoll.Median = (DiceRoll.minimal + DiceRoll.maximal) / 2;
        //Show Result
        showResults();
    }
    DiceRoll.startSimulation = startSimulation;
    function showResults() {
        console.log(DiceRoll.donkeyArt);
        console.log(`
        +---------------------------------+
        |         ROLLING RESULTS         |
        +---------------------------------+
        | Total Sum:       | ${DiceRoll.rollSum.toString().padEnd(14)} |
        | Average Roll:    | ${DiceRoll.rollAverage.toFixed(2).toString().padEnd(14)} |
        | Minimal Roll:    | ${DiceRoll.minimal.toString().padEnd(14)} |
        | Maximal Roll:    | ${DiceRoll.maximal.toString().padEnd(14)} |
        | Median Roll:     | ${DiceRoll.Median.toString().padEnd(14)} |
        +---------------------------------+
        `);
        console.log("Individual rolls:", DiceRoll.numberStash);
    }
    DiceRoll.showResults = showResults;
    function getRandomInt(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    DiceRoll.getRandomInt = getRandomInt;
    DiceRoll.donkeyArt = `######################################################################################
#                                                                                    # 
#                            ,.--------._                                            #
#                           /            ''.                                         #
#                         ,'                \\     |"\\                /\\          /\\  #
#                /"|     /                   \\    |__"              ( \\\\        // ) #
#               "_"|    /           z#####z   \\  //                  \\ \\\\      // /  #
#                 \\\\  #####        ##------".  \\//                    \\_\\\\||||//_/   #
#                  \\\\/-----\\     /          ".  \\                      \\/ _  _ \\     #
#                   \\|      \\   |   ,,--..       \\                    \\/|(O)(O)|     #
#                   | ,.--._ \\  (  | ##   \\)      \\                  \\/ |      |     #
#                   |(  ##  )/   \\ \`-....-//       |///////////////_\\/  \\      /     #
#                     '--'."      \\                \\              //     |____|      #
#                  /'    /         ) --.            \\            ||     /      \\     #
#               ,..|     \\.________/    \`-..         \\   \\       \\|     \\ 0  0 /     #
#            _,##/ |   ,/   /   \\           \\         \\   \\       U    / \\_//_/      #
#          :###.-  |  ,/   /     \\        /' ""\\      .\\        (     /              #
#         /####|   |   (.___________,---',/    |       |\\=._____|  |_/               #
#        /#####|   |     \\__|__|__|__|_,/             |####\\    |  ||                #
#       /######\\   \\      \\__________/                /#####|   \\  ||                #
#      /|#######\`. \`\\                                /#######\\   | ||                #
#     /++\\#########\\  \\                      _,'    _/#########\\ | ||                #
#    /++++|#########|  \\      .---..       ,/      ,'##########.\\|_||  Donkey By     #
#   //++++|#########\\.  \\.              ,-/      ,'########,+++++\\\\_\\\\ Hard'96       #
#  /++++++|##########\\.   '._        _,/       ,'######,''++++++++\\                  #
# |+++++++|###########|       -----."        _'#######' +++++++++++\\                 #
# |+++++++|############\\.     \\\\     //      /#######/++++ S@yaN +++\\                #
#      ________________________\\\\___//______________________________________         #
#     / ____________________________________________________________________)        #
#    / /              _                                             _                #
#    | |             | |                                           | |               #
#     \\ \\            | | _           ____           ____           | |  _            #
#      \\ \\           | || \\         / ___)         / _  )          | | / )           #
#  _____) )          | | | |        | |           (  __ /          | |< (            #
# (______/           |_| |_|        |_|            \\_____)         |_| \\_)           #
#                                                                           19.08.02 #
######################################################################################`;
})(DiceRoll || (DiceRoll = {}));
//# sourceMappingURL=DiceRollData.js.map