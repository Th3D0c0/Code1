"use strict";
var DiceRoll;
(function (DiceRoll) {
    selectionLoop();
    function selectionLoop() {
        let DieType = DiceRoll.selectDieType();
        if (DieType != "0") {
            DiceRoll.saveData(DieType, DiceRoll.selectionDieAmount(DieType));
            selectionLoop();
        }
        else {
            DiceRoll.startSimulation(DiceRoll.currentDieData, DiceRoll.maxDieData);
        }
    }
})(DiceRoll || (DiceRoll = {}));
//# sourceMappingURL=DiceRoll.js.map