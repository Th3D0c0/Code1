"use strict";
var CodeTest;
(function (CodeTest) {
    {
        let x = 2;
        switch (x) {
            case 1: {
                console.log("Case 1");
                break;
            }
            case 2: {
                console.log("Equal to 2");
                break;
            }
            default: {
                console.log("Default");
                break;
            }
        }
        console.log("Ended Switch");
    }
})(CodeTest || (CodeTest = {}));
