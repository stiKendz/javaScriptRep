// Калькулатор дискриминанта
let aDigit = document.querySelector('.input-a');
let bDigit = document.querySelector('.input-b');
let cDigit = document.querySelector('.input-c');
let calculateButton = document.querySelector('.calculate-button');
let outputResult = document.querySelector('.output-result');

function calculateRoots() {
    let disciminant = 0;
    let rootOne = 0;
    let rootTwo = 0;

    let a = Number(aDigit.value);
    let b = Number(bDigit.value);
    let c = Number(cDigit.value);

    if (a === 0 || b === 0 || c === 0){
        return outputResult.innerHTML = "Ошибка, в поле ввода не может быть 0";
    } else {
        disciminant = (bDigit.value ** 2) - 4 * aDigit.value * cDigit.value;

        if (disciminant < 0) {
            return outputResult.innerHTML = "Корней нет";
        } else if (disciminant === 0) {
            rootOne = -bDigit.value / (2 * aDigit.value);
            return outputResult.innerHTML = `Уравнение имеет один корень ${rootOne}`; 
        } else if (disciminant > 0) {
            rootOne = (-bDigit.value - Math.sqrt(disciminant)) / (2 * aDigit.value);
            rootTwo = (-bDigit.value + Math.sqrt(disciminant)) / (2 * aDigit.value);
            return outputResult.innerHTML = `Уравнение имеет 2 корня ${rootOne}, ${rootTwo}`;
        } 
    }
}

calculateButton.addEventListener('click', function() {
    calculateRoots();
});

// Тройка пифогора
let trioPartA = document.querySelector('.input-trio-a');
let trioPartB = document.querySelector('.input-trio-b');
let trioPartC = document.querySelector('.input-trio-c');
let calculateTrioButton = document.querySelector('.calculate-trio-button');
let trioResult = document.querySelector('.output-trio-result');

function toKnowPiphagorTrio() {
    let a = Number(trioPartA.value);
    let b = Number(trioPartB.value);
    let c = Number(trioPartC.value);

    if (a**2 === b**2 + c**2 || b**2 === a**2 + c**2 || c**2 === a**2 + b**2) {
        return trioResult.innerHTML = "Введеные числа являются тройкой Пифагора"
    } else {
        return trioResult.innerHTML = "Введеные числа не являются тройкой Пифагора"
    }
}

calculateTrioButton.addEventListener('click', function() {
    toKnowPiphagorTrio();
});

// Общие делители двух чисел
let numberOne = document.querySelector('.input-number-a');
let numberTwo = document.querySelector('.input-number-b');
let calculateDivisorsButton = document.querySelector('.calculate-divisors-button');
let outputDivisors = document.querySelector('.output-divisors-result');

function calculateDivisors() {
    let firstNumber = parseFloat(numberOne.value);
    let secondNumber = parseFloat(numberTwo.value);

    let minimumNumber = Math.min(firstNumber, secondNumber);
    let divisors = [];

    // Белиберда с кривой логикой (забыл про Math.min)
    // if (firstNumber > secondNumber) {
    //     for (let i = secondNumber; i < firstNumber; i++) {
    //         if (secondNumber % i === 0 && firstNumber % i === 0) {
    //             divisors.push(i);
    //         } else {
    //             return outputDivisors.innerHTML = "ошибка в 1"
    //         }
    //     }
    // } 
    // else if (firstNumber < secondNumber) {
    //     for (let i = firstNumber; i <= secondNumber; i++) {
    //         if (secondNumber % i === 0 && firstNumber % i === 0) {
    //             divisors.push(i);
    //         } else {
    //             return outputDivisors.innerHTML = "ошибка в 2"
    //         }
    //     }
    // } 
    // else {
    //     return outputDivisors.innerHTML = "Другая ошибка"
    // }

    if (firstNumber <= 0 || secondNumber <= 0) {
        return outputDivisors.innerHTML = "Число в поле ввода не может быть < или = 0"
    } else {
        for (let i = 1; i <= minimumNumber; i++) {
            if (firstNumber % i === 0 && secondNumber % i === 0) {
                divisors.push(i);
            }
        }

        if (divisors.length === 0) {
            return outputDivisors.innerHTML = "У чисел нет общих делителей";
        } else {
            return outputDivisors.innerHTML = JSON.stringify(divisors);
        }
    }
}

calculateDivisorsButton.addEventListener('click', function() {
    calculateDivisors();
});

// Игра угадайка
let startGameButton = document.querySelector('.start-game-button');
let sendNumberButton = document.querySelector('.send-number-button');
let inputNumber = document.querySelector('.input-number');
let outputGame = document.querySelector('.output-game');

const upMessage = "Попробуй число побольше!";
const downMessage = "Попробуй число поменьше!";
let pcNumber = 0;

const startGame = () => {
    pcNumber = parseInt(Math.random() * 100);
    console.log(pcNumber);
}

const runningGame = () => {
    let userInput = parseInt(inputNumber.value);

    if (pcNumber < userInput) {
        outputGame.innerHTML = downMessage;
    } else if (pcNumber > userInput) {
        outputGame.innerHTML = upMessage;
    } else {
        outputGame.innerHTML = `Молодец, ты угадал(а) число - ${pcNumber}`;
    }

    return outputGame.innerHTML;
};

startGameButton.addEventListener('click', function() {
    startGame();
});

sendNumberButton.addEventListener('click', function() {
    runningGame();
});


