namespace CodeTest {

    let numberInput: number = Number(prompt("Input number to double"));
    

    function multiplyByTwo(multiplier: number) {
        return multiplier * 2;
    }

    console.log(multiplyByTwo(multiplyByTwo(numberInput)));
}