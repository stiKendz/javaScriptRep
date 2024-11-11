let aDigit = document.querySelector('.input-a');
let bDigit = document.querySelector('.input-b');
let cDigit = document.querySelector('.input-c');
let calculateButton = document.querySelector('.calculate-button');
let outputResult = document.querySelector('.output-result');

function calculateRoots() {
    let disciminant = 0;
    let rootOne = 0;
    let rootTwo = 0;

    disciminant = (bDigit.value ** 2) - 4 * aDigit.value * cDigit.value;

    if (disciminant < 0) {
        return outputResult.innerHTML = "Корней нет";
    } else if (disciminant === 0) {
        rootOne = -bDigit.value / (2 * aDigit.value);
        return outputResult.innerHTML = `Уравнение имеет один корень ${rootOne}`; 
    } else if (disciminant > 0) {
        rootOne = -bDigit.value - Math.sqrt(disciminant) / (2 * aDigit.value);
        rootTwo = -bDigit.value + Math.sqrt(disciminant) / (2 * aDigit.value);
        return outputResult.innerHTML = `Уравнение имеет 2 корня ${rootOne}, ${rootTwo}`;
    } else {
        return outputResult.innerHTML = "Ошибка";
    }
}

calculateButton.addEventListener('click', function() {
    calculateRoots();
})