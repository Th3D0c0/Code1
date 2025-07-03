"use strict";
var TextAdventure;
(function (TextAdventure) {
    let currentLevel = location.href;
    let bossText = document.body.getElementsByTagName("div")[1];
    let bossTextParent = document.body.getElementsByTagName("div")[0];
    console.log(bossTextParent);
    console.log("Has Entered Boss Room?:" + parent.hasEnteredBossRoom);
    console.log("Has Key: " + parent.hasKey);
    console.log(parent.hasSword);
    //Check if current Level is Boss Level
    if (currentLevel.endsWith("Boss_Level.html")) {
        console.log(parent.hasEnteredBossRoom == true);
        if (parent.hasEnteredBossRoom === undefined) {
            parent.hasEnteredBossRoom = true;
            console.log(parent.hasEnteredBossRoom);
        }
        else if (parent.hasEnteredBossRoom == true) {
            bossTextParent.removeChild(bossText);
            console.log("TEST TRUE");
        }
    }
    if (currentLevel.endsWith("Level3_1.html")) {
        if (parent.hasSword === undefined) {
            alert("You have received a big Sword");
            parent.hasSword = true;
        }
    }
    if (currentLevel.endsWith("DefeatedBoss.html")) {
        if (parent.hasSword == false) {
            alert("You don´t have a Key");
            window.location.assign("Boss_Level.html");
        }
        else if (parent.hasSword == true) {
            alert("You have received a Key");
            parent.hasKey = true;
        }
    }
    if (currentLevel.endsWith("TreasureEnd.html")) {
        if (parent.hasKey != true) {
            window.location.assign("Level3_1.html");
        }
    }
})(TextAdventure || (TextAdventure = {}));
