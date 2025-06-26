"use strict";
var CodeTest;
(function (CodeTest) {
    let numberInput = Number(prompt("Input number to double"));
    function multiplyByTwo(multiplier) {
        return multiplier * 2;
    }
    console.log(multiplyByTwo(multiplyByTwo(numberInput)));
})(CodeTest || (CodeTest = {}));
