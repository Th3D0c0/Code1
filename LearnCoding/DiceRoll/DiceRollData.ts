namespace DiceRoll{
    export let currentDieData = {"d4": 0, "d6": 0, "d8": 0, "d10": 0,"d12": 0, "d20": 0};
    export let maxDieData = {"d4": 4, "d6": 6, "d8": 8, "d10": 10,"d12": 12, "d20": 20};

    //Initialization Values
    console.log("Data")



    //Global Roll Output Variables
    export let overallSum: number;
    export let overallAverage: number;
    export let overallMax: number;
    export let overallMin: number;
    export let overalMedian: number;

    //Single Roll Output Variables
    export let rollSum: number;
    export let rollAverage: number;
    export let rollMax: number;
    export let rollMin: number;
    export let rollMedian: number;



    //Functions
    export function selectDiceType(): string{

        let userInput: number = parseInt(prompt("What Dice to choose: (1):D4, (2):D6, (3):D8, (4):D10, (5):D12, (6): D20, (0): Start Simulation") || "-1");
        let userDiceDecition: string = "0";

        switch(userInput){
            case -1: {
                selectDiceType()
                break;
            }
            case 0:{
                startSimulation();
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
                userDiceDecition = "d8";
                break;
            }
        }

        return userDiceDecition;
    }



    export function startSimulation(){


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