namespace DiceRoll{

 

    selectionLoop()




    function selectionLoop():void {
    
     let DieType: string = selectDieType();
     if(DieType != "0"){
         saveData(DieType ,selectionDieAmount(DieType))
          selectionLoop();
      }
      else{
         startSimulation(currentDieData, maxDieData);
      }
    }
    
}