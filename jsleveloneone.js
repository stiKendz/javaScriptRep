// ----- задание 1
// let randomNumber = 1;

// function positiveOrNegative(randomNumber) {
// 	if (randomNumber > 0) {
// 		console.log(`Number ${randomNumber} is positive`)
// 	} else {
// 		console.log(`Number ${randomNumber} is negative`)
// 	};
// }

// positiveOrNegative(randomNumber);



// ----- задание 2

// let randomString = 'beliberda';
// console.log('Length of string = ' + randomString.length);



// ----- задание 3

// let randomStringTwo = 'beliberdaTwo';
// let endOfString = randomStringTwo.slice(-1);
// console.log(endOfString);



// ----- задание 4

// let randomNumberTwo = 10;

// function EvenOdd(arg) {
// 	if (arg % 2 == 0) {
// 		console.log(`Number ${arg} is even`)
// 	} else {
// 		console.log(`Number ${arg} is odd`)
// 	}
// }

// EvenOdd(randomNumberTwo);



// ----- задание 5

// let randomWord = 'earth';
// let randomWordTwo = 'eight';

// function FirstLetter(argOne, argTwo) {
// 	if (argOne.charAt() == argTwo.charAt()) {
// 		console.log('letters are coincide (совпадают)')
// 	} else {
// 		console.log('letters arent coincide (не совпадают)')
// 	};
// };

// FirstLetter(randomWord,randomWordTwo);



// ----- задание 6

// let randomWordThree = 'топь'

// function SoftSign(arg) {
// 	if (arg.slice(-1) == 'ь') {
// 		console.log(`last letter ${arg.slice(-2,-1)} (skip soft sign at the end)`)
// 	} else {
// 		console.log(`last letter ${arg.slice(-1)} (no soft sign at the end)`)
// 	};
// };

// SoftSign(randomWordThree);



// 1.2
// ----- задание 1 
// let number = 134;

// const firstDigitStr = String(number)[0];
// console.log(firstDigitStr); 
// console.log(typeof firstDigitStr);
// const firstDigitNum = Number(firstDigitStr);
// console.log(firstDigitNum);
// console.log(typeof firstDigitNum);



// ----- задание 2

// let number = 123;

// const lastFigureOfNumber = Math.abs(number) % 10; 
// console.log(lastFigureOfNumber);ы

// // метод Math.abs используется для того, 
// // что бы взять абсоютное значение числа number, 
// // а оператор % 10 делит 123 на 10 => получается 12.3 math.abs отсекает 12



// ----- задание 3

// let randomNumber = 123; // our number

// let firstFigureStr = String(randomNumber)[0]; // find first figure on our number
// let firstFigureNum = Number(firstFigureStr); // convert string to number

// let lastFigure = Math.abs(randomNumber) % 10; // find last figure of our number

// let summaResult = firstFigureNum + lastFigure; // adittion of new numbers

// console.log(`Сумма первой и последней цифры числа ${randomNumber} = ${summaResult}`); // final result



// ----- задание 4

// let number = 555;
// numberStr = String(number);

// console.log(numberStr.length);



// ----- задание 5
// let randomNumber = 15;
// let randomNumberTwo = 28;

// let randomNumberString = randomNumber.toString();
// let randomNumberTwoString = randomNumberTwo.toString();

// if (randomNumberString.charAt(0) === randomNumberTwoString.charAt(0)){
// 	console.log('First figures of two numbers are equal')
// } else {
// 	console.log('First figures of two numbers are not equal')
// }




// 1.3
// ----- задание 1
// let randomString = 'biggest elevator';

// function StringSymbol(str) {
// 	if (str.length > 1) {
// 		let slicedString = str.slice(-2);
// 		const preLastSymbol = slicedString.split('');
// 		console.log(`Предпоследний символ строки : ${preLastSymbol[0]}`);
// 	} else if (str.length = 1) {
// 		console.log('В строке 1 символ, либо строка пустая')
// 	} else {
// 		console.log('Произошла ошибка')
// 	}
// };

// StringSymbol(randomString);




// ----- задание 2
// let numberOne = 25;
// let numberTwo = 11;

// function RemainderDivide(arg1 , arg2) {
// 	if (arg1 % arg2 === 0) {
// 		console.log(`Число ${numberOne} делится без остатка на ${numberTwo}`)
// 	} else if (arg1 % arg2 !== 0){
// 		remaind = arg1 % arg2;
// 		console.log(`Число ${numberOne} делится с остатком ${remaind} на число ${numberTwo}`)
// 	} else {
// 		console.log('Что-то пошло не так');
// 	}
// };

// RemainderDivide(numberOne, numberTwo);




// 1.4
// ----- задание 1
// const massRow = [];

// for (let i = 100; massRow.lenght < i; i++) {
// 	massRow[i]+=i;
// }
// console.log(massRow); 
// реализацию вывола чисел через заполненный массив оставлю на потом, пойду более лёгким путем

// let maximumNumber = 100;

// function MaxNumber(arg) {
// 	for (let i = 1; arg >= i; i++) {
		
// 		console.log(i);
// 	};
// };

// MaxNumber(maximumNumber);




// ----- задание 2
// let outputNumber = 1;

// function allNumbers(arg) {
// 	for (let i = -100; arg > i; i++) {
// 		console.log(i)
// 	}
// }

// allNumbers(outputNumber);




// ----- задание 3
// let outputNumber = 1;
 
// function allNumbers(arg) {
// 	for (let i = 100; arg <= i; i--) {
// 		console.log(i);
// 	};
// };

// allNumbers(outputNumber);




// ----- задание 4
// let numbesrLine = 100;

// function evenNumbers(arg) {
// 	for (let i = 1; arg >= i; i++) {
// 		if (i % 2 === 0) {
// 			console.log(i);
// 		} else {
			
// 		};
// 	};
// };

// evenNumbers(numbesrLine);




// ----- задание 5
// let numbersLine = 100;

// function multipleThreeNumbers(arg) {
// 	for (let i = 1; numbersLine >= i; i++) {
// 		if (i % 3 === 0) {
// 			console.log(i);
// 		} else {

// 		};
// 	};
// };

// multipleThreeNumbers(numbersLine);




// 1.5
// ----- задание 1
// let randomNumbers = [1, 99];

// function randomNumbersSumm(numbersLine) {
// 	const [start, end] = numbersLine;
// 	let sum = 0;
// 	for (let i = start; i <= end; i++) {
// 		sum+=i;
// 	}
// 	return sum;
// }
// const result = randomNumbersSumm(randomNumbers);
// console.log(result);




// ----- задание 2
// let randomNumbers = [1, 100];

// function randomNumbersSumm(numbersLine) {
// 	const [start, end] = numbersLine;
// 	let sum = 0;
// 	for (let i = start; i <= end; i++) {
// 		if (i % 2 === 0) {
// 			sum+=i;
// 		} else {

// 		}
// 	}
// 	return sum;
// }
// const result = randomNumbersSumm(randomNumbers);
// console.log(result);




// ----- задание 3
// let randomNumbers = [1, 100];

// function randomNumbersSumm(numbersLine) {
// 	const [start, end] = numbersLine;
// 	let sum = 0;
// 	for (let i = start; i <= end; i++) {
// 		if (i % 2 !== 0) {
// 			sum+=i;
// 		} else {

// 		}
// 	}
// 	return sum;
// }
// const result = randomNumbersSumm(randomNumbers);
// console.log(result);




// ----- задание 4
// let numberOne = 12;
// let numberTwo = 7;

// function numbersOstatok(argOne, argTwo) {
// 	let resultNumber = argOne % argTwo;
// 	return resultNumber;
// }

// console.log(numbersOstatok(numberOne, numberTwo));




// ----- задание 5
// let randomString = 'Привет, дорогой JS';

// function reverseString(str) {
// 	const reversedString = str.split('').reverse().join('');
// 	for (let i = 0; i < reversedString.length; i++) {
// 		console.log(reversedString[i]);
// 	}
// }

// (reverseString(randomString));




// 1.6
// ----- задание 1
// const worstNumbers = [2, 6, 8, 12];

// function squaresOfMassive(massive) {
// 	return massive.reduce((sum, x) => 
// 		sum + x ** 2, 0
// 	)
// }

// const result = squaresOfMassive(worstNumbers);
// console.log(result); ............ИСПОЛЬЗУЯ REDUCE



// function summSquaresOfNumbers(massive) {
// 	const squareMass = [] = massive;
// 	for (let i = 0; i < squareMass.length; i++) {
// 		let squareNumber = squareMass[i];
// 		squareNumber *= squareNumber;
// 		const numbersSquares = [squareNumber];
// 		console.log(numbersSquares);
// 	}
// }

// console.log(summSquaresOfNumbers(worstNumbers))
//............МОЙ БРЕД


// function sumOfSquares(arr) {
// 	let sum = 0; // Инициализируем сумму
// 	for (let i = 0; i < arr.length; i++) { // Проходим по каждому элементу массива
// 		 sum += arr[i] ** 2; // Добавляем квадрат каждого элемента к сумме
// 	}
// 	return sum; // Возвращаем сумму квадратов
// }

// // Пример использования:
// const numbers = [1, 2, 3, 4, 5];
// const result = sumOfSquares(numbers);
// console.log("Сумма квадратов элементов массива:", result);
//............НЕ ИСПОЛЬЗУЯ REDUCE




// ----- задание 2
// const randomNumbersLine = [4, 16, 36, 64];

// function squaresOfNumbers(massive) {
// 	let sum = 0;
// 	for (let i = 0; i < massive.length; i++) {
// 		let rootsResult = Math.sqrt(massive[i]);
// 		sum += rootsResult;	
// 	}
// 	return sum;
	
// }

// const result = squaresOfNumbers(randomNumbersLine);
// console.log(result);




// ----- задание 3
// const randomNumbersLine = [4, -16, 36, -64];

// function summOfEvenNumbers(massive) {
// 	let sum = 0;
// 	for (let i = 0; i < massive.length; i++) {
// 		if (massive[i] > 0) {
// 			sum += massive[i];
// 		} else {

// 		}
// 	}
// 	return sum;
// }

// const result = summOfEvenNumbers(randomNumbersLine);
// console.log(result);




// ----- задание 4
// const randomNumbersLine = [5, 10, 9, 0];

// function zeroTenFilter(massive) {
// 	let sum = 0;
// 	for (let i = 0; i < massive.length; i++) {
// 		if (massive[i] > 0 && massive[i] < 10) {
// 			sum += massive[i];
// 		} else {

// 		}
// 	}
// 	return sum;
// }

// const result = zeroTenFilter(randomNumbersLine);
// console.log(result);




// 1.7
// ----- задание 1
// let randomString = 'абвгд';

// function arrayOfStringSymbols(string) {
// 	let splittedString = string.split('');
// 	return splittedString;
// }

// const result = arrayOfStringSymbols(randomString);
// console.log(result);




// ----- задание 2
// let randomNumber = 12345;

// function arrayNumbersOfNumbers(number) {
// 	const numbersArray = String(number).split('').map(Number);
// 	return numbersArray;
// } 

// const result = arrayNumbersOfNumbers(randomNumber);
// console.log(result);




// ----- задание 3
// let randomNumber = 12345;

// function reversedNumber(number) {
// 	const reverse = String(number).split('').reverse().join('');
// 	return Number(reverse);
// }

// const result = reversedNumber(randomNumber);
// console.log(result);




// ----- задание 4
// let randomNumber = 15345;

// function summOfDigits(number) {
// 	const sumOfElements = String(number).split('').map(Number).reduce((acc, digit) => acc + digit, 0);
// 	return sumOfElements;
// }

// const result = summOfDigits(randomNumber);
// console.log(result);




// 1.8
// ----- задание 1
// const randomArray = [];

// function fillArray(array) {
// 	for (let i = 1; i <= 10; i++) {
// 		array.push(i);
// 	}
// 	return array;
// }

// const result = fillArray(randomArray);
// console.log(result);




// ----- Задание 2
// const randomArray = [];

// function fillArrayEvenNumbers(array) {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 === 0) {
//             array.push(i);
//         } else {

//         }
//     }
//     return array;
// }

// const result = fillArrayEvenNumbers(randomArray);
// console.log(result);




// ----- Задание 3
// const floatArray = [1.456, 2.125, 3.32, 4.1, 5.34];

// function mathRoundArray(array) {
//     return array.map((el) => el = (Math.round(el * 10)) / 10);
// }

// const result = mathRoundArray(floatArray);
// console.log(result);




// ----- Уровень 1.9
// ----- Задание 1
// const stringArray = ['https://yandex', 'http://ads', 'https://',
//     'https://', 'httbeliberda', 'http://', 'https://youtube'];

// function arraySort(array) {
//     return array.filter((stringEl) => stringEl.startsWith('https://'))
// }

// const result = arraySort(stringArray);
// console.log(result);


// ----- Задание 1 усоверщенствованный вариант
// const stringArray = ['https://yandex', 'http://ads.html', 'https://',
//     'https://', 'httbeliberda.html', 'http://', 'https://youtube.html'];

// function arraySort(array, startSymbol) {
//     return array.filter((stringEl) => stringEl.startsWith(startSymbol))
// }

// const result = arraySort(stringArray, 'https://');
// console.log(result);




// // ----- Задание 2
// const stringArray = ['https://yandex', 'http://ads.html', 'https://',
//     'https://', 'httbeliberda.html', 'http://', 'https://youtube.html'];

// function arraySortByEnd(array) {
//     return array.filter((stringEl) => stringEl.endsWith('.html'));
// }

// const result = arraySortByEnd(stringArray);
// console.log(result);


// ----- Задание 2 УВ
// const stringArray = ['https://yandex', 'http://ads.html', 'https://',
//     'https://', 'httbeliberda.html', 'http://', 'https://youtube.html'];

// function arraySortByEnd(array, endElement) {
//     return array.filter((stringEl) => stringEl.endsWith(endElement));
// }

// const result = arraySortByEnd(stringArray, '.html');
// console.log(result);




// ----- Задание 3
// const randomNumbers = [100, 225, 300, 400, 500, 600, 743];

// function upToPercent(array, percent) {
//     return array.map((element) => element += element * percent);
// }

// const result = upToPercent(randomNumbers, 0.15);
// console.log(result);




// ----- Уровень 1.10
// ----- Задание 1
// function fillArrayFromInterval(start, end) {
//     const random = [];
//     for (let i = start; i <= end; i++) {
//         let randomNumber = + Math.random() * i;
//         random.push(randomNumber);
//     }
//     return random.map((element) => element = Math.round(element));
// }

// const result = fillArrayFromInterval(1, 100);
// console.log(result); 100 рандомных чисел


// ----- Задание 1 УВ
// function fillArrayFromInterval(intervalNumber, howManyNumbers) {
//     const random = [];
//     for (let i = intervalNumber, k = 1; k <= howManyNumbers; k++) {
//         let randomNumber = + Math.random() * i;
//         random.push(randomNumber);
//     }
//     return random.map((element) => element = Math.round(element));
// }

// const result = fillArrayFromInterval(100, 20);
// console.log(result);




// ----- Задание 2
// let randomNumber = 12345;

// function reverse(number) {
// 	let reversedNumber = String(number).split('').reverse();
// 	return reversedNumber.map((el) => el = console.log(Number(el)));
// }

// reverse(randomNumber);




// ----- Задание 3
// const randomArray = [1, 2, 3, 4, 5, 6];

// function manyArrays(array) {
// 	let dublicate = [];
// 	for (let i = 0; i < array.length; i += 2) {
// 		dublicate.push(array.slice(i, i + 2));
// 	}
// 	return dublicate;
// }

// const result = manyArrays(randomArray);
// console.log(result);


// ----- Задание 3 УВ
// const randomArray = [1, 2, 3, 4, 5, 6];

// function slicedArray(array) {
// 	for (let i = 0; i < array.length; i += 2) {
// 		console.log(array.slice(i, i + 2));
// 	}
// }

// slicedArray(randomArray);




// ----- Задание 4
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// function combineArrays(arrayOne, arrayTwo) {
// 	let newArray = [];
// 	return newArray = arrayOne.concat(arrayTwo);
// }

// const result = combineArrays(arr1, arr2);
// console.log(result);




// ----- Уровень 2.1
// ----- Задание 1
// let randomString = 'one two0 three0';

// function firstIndexOfNull(string) {
// 	return console.log(string.indexOf(0));
// }

// firstIndexOfNull(randomString);




// ----- Задание 2
// let interval = 1000;

// function sumOneAndTwoDigits(number) {
// 	for (let i = 1; i <= number; i++) {
// 		const stringNumber = i.toString();
// 		const firstDigit = parseInt(stringNumber[0]);
// 		const secondDigit = parseInt(stringNumber[1]);

// 		if (firstDigit + secondDigit === 5) {
// 			console.log(i);
// 		} else {

// 		}
// 	}
// }

// sumOneAndTwoDigits(interval);




// ----- Задание 3
// let randomArray = [23, 48, 'da', 're', 23, 48, 'mdae', 'fo', 'da'];
// const giveValue = 23;

// function deleteElements(array, value) {
// 	return array.filter((element) => element !== value);
// }

// const result = deleteElements(randomArray, giveValue);
// console.log(result);




// ----- Задание 4 один из вариантов
// let anyArray = [1, 2, 3, 4, 5, 6];

// function sumOfHalf(array) {
// 	const half = (array.length / 2);
// 	let sum = 0; 
// 	for (let i = 0; i <= half; i++) {
// 		sum += i;
// 	}
// 	return sum
// }

// const result = sumOfHalf(anyArray);
// console.log(result);


// ----- Задание 4 один из вариантов (белиберда, но интересная белиберда)
// let anyArray = [1, 2, 3, 4, 5, 6];

// function sumOfHalf(array) {
// 	const half = array.length / 2;
// 	let sum = 0;
// 	return array.slice(0, half).map((element) => sum += element)
// }

// const result = sumOfHalf(anyArray);
// console.log(result);


// ----- Задание 4 я + нейронкаs
// let anyArray = [1, 2, 3, 4, 5, 6, 7];

// function sumOfHalf(array) {
// 	const half = Math.ceil(array.length / 2);
// 	const divideArray = array.slice(0, half);
// 	const halfSum = divideArray.reduce((acc, current) => acc + current, 0);
// 	return halfSum;
// }

// const result = sumOfHalf(anyArray);
// console.log(result);


// ----- Задание 4 нейронка
// const array = [1, 2, 3, 4, 5, 6];
// const halfIndex = Math.ceil(array.length / 2); // Находим индекс, разделяющий массив на две половины
// const firstHalf = array.slice(0, halfIndex); // Выделяем первую половину массива
// const sum = firstHalf.reduce((acc, current) => acc + current, 0); // Вычисляем сумму первой половины

// console.log(sum);




// ----- Уровень 2.2
// ----- Задание 1
// const anyArray = [1, 2, -3, -6, 10];

// function negativeNumbersQuantity(array) {
// 	let nagativeNumbersCounter = 0;
// 	array.forEach(function negativeelement(element) {
// 		if (element < 0) {
// 			nagativeNumbersCounter++;
// 		} else {
			
// 		}
// 	})
// 	return nagativeNumbersCounter;
// }

// const result = negativeNumbersQuantity(anyArray);
// console.log(result);




// ----- Задание 2
// const anyArray = [1, 2, -3, -6, 10];

// function onlyPositiveNumbers(array) {
// 	const filteredArray = array.filter((element) => element > 0);
// 	return filteredArray;
// }

// const result = onlyPositiveNumbers(anyArray);
// console.log(result);




// ----- Задание 3
// const anyString = 'Hello js';

// function preEndSymbolDelete(string) {
// 	return string.slice(0, -2) + string.slice(-1);
// }

// const result = preEndSymbolDelete(anyString);
// console.log(result);




// ----- Задание 4
// const anyArray = [1, 2, 3, 4, 5, 6];

// function arraySum(array) {
// 	const halfArray = Math.ceil(array.length / 2);
// 	let slicedArrayOne = array.slice(0, halfArray);
// 	let slicedArrayTwo = array.slice(halfArray, -1);
	
// 	let sum = 0;
// 	let sumTwo = 0;
// 	const firstSum = slicedArrayOne.reduce((accumulator, currentValue) => accumulator + currentValue, sum);
// 	const secondSum = slicedArrayTwo.reduce((accumulator, currentValue) => accumulator + currentValue, sumTwo);

// 	const divideResult = firstSum / secondSum;
// 	return Number(divideResult.toFixed(2));
// }

// const result = arraySum(anyArray);
// console.log(result);





// ----- Уровень 2.3
// ----- Задание 1 
// let randomWord = 'баг';
// let randomWordTwo = 'габ';

// function wordEqu(word1, word2) {
//     const lastLetterWordOne = word1[word1.length - 1];
//     const firstLettewWordTwo = word2[0];

//     const result = lastLetterWordOne === firstLettewWordTwo;
//     let message = '';
//     if (result == false) {
//         message = 'Буквы не совпадают'
//     } else {
//         message = 'Буквы совпадают'
//     }

//     return message
// }

// const result = wordEqu(randomWord, randomWordTwo);
// console.log(result);




// ----- Задание 2 
// мой вариант (не правильный)
// let randomString = 'let0 let0 let0 let'

// function indexOfTrirdZero(string) {
//     let index = 0
//     let splittedString = string.split('');

//     let counter = 0;
//     for (let i = 0; i< splittedString.length; i++) {
//         splittedString[i];
//         if (splittedString[i] === 0) {
//             counter++;
//         }
//     }
//     return index = splittedString.lastIndexOf('0');
// }

// const result = indexOfTrirdZero(randomString);
// console.log(result);


// вариант нейронки (правильный)
// let randomString = 'a0000'

// function indexOfTrirdZero(string) {
//     let message = 'error'
//     let splittedString = string.split('');

//     let counter = 0;
//     for (let i = 0; i< splittedString.length; i++) {
//         if (splittedString[i] === '0') {
//             counter++;
//             if (counter === 3) {
//                return i
//             }
//         } else {}
//     }
//     return message;
// }

// const result = indexOfTrirdZero(randomString);
// console.log(result);


// УВ 
// (проветить один момент через отладчик --- counter++)
// let randomString = 'one0 two0 three0 four0 five0';

// function indexOfZero(string, positionDigit) {
//     let splitString = string.split('');
//     let counter = 0;

//     for (let i = 0; i < splitString.length; i++) {
//         if (splitString[i] === '0') {
//             counter++;
//             if (counter === positionDigit) {
//                 return console.log(i);
//             } else {}
//         } else {}
//     }

//     return console.log('ошибка')
// }

// indexOfZero(randomString, 2);






// ----- Задание 3
// let randomString = '1x,2,3gte,4'; ---не ломается только в случае, если складывать цифры(1 - 9), с числами всему приходит конец
// let randomString = '1x,2,3gte11,4'; //как пример

// function sumNumbersOfString(string){
//     let splittedString = string.split('');
//     let filteredString = splittedString.filter((element) => Number(element));
//     let numbersFromString = filteredString.map((element) => element = parseInt(element, 10));
//     let sum = numbersFromString.reduce((number, amountNumbers) => number + amountNumbers);
//     return sum;
// }

// const resultTwo = sumNumbersOfString(randomString);
// console.log(resultTwo);


// // ----- Задание 3 рабочий вариант (нет)
// let randomString = '12bvc_,34e,56asd'; // работает пока перед числом не добавить любой символ, 
// // либо не поставить любое число после символов, не отделенное от них запятой
// // let randomString = '12b1vc_,j34e,56asd'; // как пример

// function sumOfNumbersInString(string) {
//     let splitString = string.split(',');
//     let numbersFromString = splitString.map((element) => element = parseInt(element, 10));
//     let sum = numbersFromString.reduce((previousValue, currentValue) => previousValue + currentValue);

//     console.log(numbersFromString);
//     return sum;
// }

// const resultTwo = sumOfNumbersInString(randomString);
// console.log(resultTwo);


// ----- Задание 3 ТОЧНО рабочий вариант
// let randomString = '12bvc_,34e,56asd-_8';

// function sumOfNumbersInString(string) {
//     const regexp = /\d+/g;

//     let matches = string.match(regexp);
//     let numbersFromString = matches ? matches.map(element => parseInt(element, 10)) : [];
//     let sum = numbersFromString.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

//     console.log(numbersFromString);
//     return sum;
// }

// const result = sumOfNumbersInString(randomString);
// console.log(result);




// ----- Задание 4
// let date = '2025-12-31';

// function createObject(futureObj) {
//     let [year, month, day] = futureObj.split('-');

//     let dateObj = {
//         year: year,
//         month: month,
//         day: day
//     }

//     return dateObj;
// }

// const result = createObject(date);
// console.log(result);





// ----- Уровень 2.4
// ----- Задание 1 
// let randomString = 'абв__=;12'

// function firstDigit(string) {
//     const message = 'error';
//     for (let i = 0; i < string.length; i++) {
//         if (!isNaN(string[i]) && string[i] !== '') {
//             return i;
//         }
//     }
//     return message;
// }

// const result = firstDigit(randomString);
// console.log(result);


