let squareSide = document.getElementById('side-input');
let perimeterOutput = document.getElementById('output-perimeter');
let sOutput = document.getElementById('output-s');
let calculateButton = document.getElementById('calculate-button-id');

let sideValue = squareSide.value;
const message = `Error ${sideValue.value} not a number`;

function countPerimeter() {
    if ( isNaN(squareSide.value) ) {
        return perimeterOutput.innerHTML = message;
    } else {
        let result = "Периметр: " + 4 * parseInt(squareSide.value);
        return perimeterOutput.innerHTML = result;
    }
}

function countS() {
    if ( isNaN(squareSide.value) ) {
        return sOutput.innerHTML = message;
    } else {
        let result = "Площадь: " + Math.pow(parseInt(squareSide.value), 2);
        return sOutput.innerHTML = result;
    }
}

calculateButton.addEventListener('click', function() {
    countPerimeter();
    countS();
})



