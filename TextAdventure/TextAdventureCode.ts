namespace TextAdventure {
    type Parent = Window & { hasKey: boolean, hasSword: boolean, hasEnteredBossRoom: boolean};
    declare var parent: Parent;
    let currentLevel = location.href;

    let bossImage = document.getElementById("BossImg") as HTMLImageElement;
    let bossText = document.body.getElementsByTagName("div")[1]
    let bossTextParent = document.body.getElementsByTagName("div")[0]
    let changedBossText = document.body.getElementsByTagName("div")[0]
    //let currentBossImg = ;
    //let newBossImg = ;


    //Check if current Level is Boss Level
    if (currentLevel.endsWith("Boss_Level.html")) {
        console.log(parent.hasEnteredBossRoom == true)
        if (parent.hasEnteredBossRoom === undefined) {
            parent.hasEnteredBossRoom = true;
  
        }
        else if(parent.hasEnteredBossRoom == true){
            bossTextParent.removeChild(bossText);
            changedBossText.innerText = "The boss is already Dead"
            bossTextParent.appendChild(changedBossText)
            bossImage.src = "Images/DeadBoss.png"; 
        }
    }


    if (currentLevel.endsWith("Level3_1.html")) {
        if (parent.hasSword === undefined) {
            alert("You have received a big Sword")
            parent.hasSword = true;
        }
    }


    if (currentLevel.endsWith("DefeatedBoss.html")) {
        if (parent.hasSword == false) {
            alert("You don´t have a Key");
            window.location.assign("Boss_Level.html");
        }
        else if (parent.hasSword == true){
            alert("You have received a Key")
            parent.hasKey = true;
        }
    }

    if (currentLevel.endsWith("TreasureEnd.html")) {
        if (parent.hasKey != true) {
            window.location.assign("Level3_1.html");
        }
    }
}
