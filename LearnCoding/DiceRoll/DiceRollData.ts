namespace DiceRoll{
    export let currentDieData: any = {"d4": 0, "d6": 0, "d8": 0, "d10": 0,"d12": 0, "d20": 0};
    export let maxDieData: any = {"d4": 4, "d6": 6, "d8": 8, "d10": 10,"d12": 12, "d20": 20};
    export let numberStash: any = {"d4": [], "d6": [], "d8": [], "d10": [],"d12": [], "d20": []};

    //Initialization Values
    export let currentDieType: string;
    export let currentDieAmount: number;


    //Global Roll Output Variables
    export let overallSum: number = 0;
    export let overallAverage: number = 0;
    export let overallMax: number = 0;
    export let overallMin: number = 0;
    export let overalMedian: number = 0;

    //Single Roll Output Variables
    export let rollSum: number = 0;
    export let rollAverage: number = 0;
    export let rollMax: number = 0;
    export let rollMin: number = 0;
    export let rollMedian: number = 0;



    //Functions
    export function selectDieType(): string{

        let userInput: number = parseInt(prompt("What Die to choose: (1):D4, (2):D6, (3):D8, (4):D10, (5):D12, (6): D20, (0): Start Simulation") || "-1");
        let userDiceDecition: string = "0";

        switch(userInput){
            case -1: {
                selectDieType();
                break;
            }
            case 1: {
                userDiceDecition = "d4";
                break;
            }
            case 2:{
                userDiceDecition = "d6";
                break;
            }
            case 3:{
                userDiceDecition = "d8";
                break;
            }
            case 4:{
                userDiceDecition = "d10";
                break;
            }
            case 5:{
                userDiceDecition = "d12";
                break;
            }
            case 6:{
                userDiceDecition = "d20";
                break;
            }
        }

        return userDiceDecition;
    }

    export function selectionDieAmount(_dieType: string): number{
        let userAmountInput: number = parseInt(prompt("How many " + _dieType + " do you want? ") || "-1");
        return userAmountInput;
    }

    export function saveData(_dieType: string, _dieAmount: number): void{
        currentDieData[_dieType] += _dieAmount;
    }

    export function startSimulation(_currentDieData:[], _maxDieData: []){

        for(const key in _currentDieData){
            console.log(numberStash);
            switch(key){    
                case "d4": 
                for (let i = 0; i < _currentDieData[key]; i++){
                    let localDieStorage: number = getRandomInt(1,4)
                    //Sum up Values
                    rollSum += localDieStorage
                    //Stash the current Value
                    numberStash[key].push(localDieStorage);
                    console.log("D4: " + localDieStorage)
                    break;
                }

                case "d6": 
                for (let i = 0; i < _currentDieData[key]; i++){
                    let localDieStorage: number = getRandomInt(1,6)
                    //Sum up Values
                    rollSum += localDieStorage
                    //Stash the current Value
                    numberStash[key].push(localDieStorage);
                    break;
                }

                case "d8": 
                for (let i = 0; i < _currentDieData[key]; i++){
                    let localDieStorage: number = getRandomInt(1,8)
                    //Sum up Values
                    rollSum += localDieStorage
                    //Stash the current Value
                    numberStash[key].push(localDieStorage);
                    break;
                }

                case "d10": 
                for (let i = 0; i < _currentDieData[key]; i++){
                    let localDieStorage: number = getRandomInt(1,10)
                    //Sum up Values
                    rollSum += localDieStorage
                    //Stash the current Value
                    numberStash[key].push(localDieStorage);
                    break;
                }

                case "d12": 
                for (let i = 0; i < _currentDieData[key]; i++){
                    let localDieStorage: number = getRandomInt(1,12)
                    //Sum up Values
                    rollSum += localDieStorage
                    //Stash the current Value
                    numberStash[key].push(localDieStorage);
                    break;
                }
                
                case "d20": 
                for (let i = 0; i < _currentDieData[key]; i++){
                    let localDieStorage: number = getRandomInt(1,20)
                    //Sum up Values
                    rollSum += localDieStorage
                    //Stash the current Value
                    numberStash[key].push(localDieStorage);
                    break;
                }
      
            }
        }
        //Calculate Average 

        for (const key in numberStash) {
        // Get the array for the current key, e.g., numberStash["d4"]
        const currentArray = numberStash[key];
        
        // Get the number of entries using the .length property
        const amountOfEntries = currentArray.length;
        console.log(`The number of rolls for ${key} is: ${amountOfEntries}`);
        }



        rollAverage = rollSum / numberStash["d4"]

    }


    export function getRandomInt(_min: number, _max: number) {
  return Math.floor(Math.random() * (_max - _min + 1) + _min);
}































        export const  donkeyArt = `######################################################################################
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
}