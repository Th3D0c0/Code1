namespace TextAdventure {
    type Parent = Window & { hasKey: boolean, hasSword: boolean };
    declare var parent: Parent;
    console.log(location.href);
    let currentLevel = location.href;

    console.log(parent.hasKey)
    console.log(parent.hasSword);
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
