// // ----- 1 ----- // введение
// let weekdayNames = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// }

// // выводим все элементы объекта (функция)
// function allElementsInObject(object) {
//     for (let i = 1; i <= Object.keys(object).length; i++) [
//         console.log(object[i])
//     ]
// }

// allElementsInObject(weekdayNames);


// // ----- 2 -----
// let monthNames = {
//     1: 'Январь',
//     2: 'Февраль',
//     3: 'Март',
//     4: 'Апрель',
//     5: 'Май',
//     6: 'Июнь',
//     7: 'Июль',
//     8: 'Август',
//     9: 'Сентябрь',
//     10: 'Октябрь',
//     11: 'Ноябрь',
//     12: 'Декабрь'
// }

// // выводим в консоль весь объкт
// console.log(monthNames);


// ----- 3 -----
// function runCode() {
//     let user = {
//         name: 'Иван',
//         surname: 'Семенов',
//         patronymic: 'Иванович'
//     }

//     console.log(`${user['name']} ${user['surname']} ${user['patronymic']}`);
    
//     alert(`${user['name']} ${user['surname']} ${user['patronymic']}`);
// }


// ----- 4 -----
// function runCode() {
//     let date = {
//         year: '2024',
//         month: '10',
//         day: '27'
//     }

//     console.log(`${date.year}-${date.month}-${date.day}`);

//     alert(`${date.year}-${date.month}-${date.day}`);
// }


// ----- 5 -----

function runCode() {
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let result = 0;

    for (let i = 0; i < Object.keys(obj); i++) {
        obj[i * i];
    }   

    console.log(obj);
}

console.log(result)
// let obj = {
//     a: '1',
//     b: '2',
//     c: '3'
// }
// obj['a'] = '!';
// obj.b = '!';
// console.log(obj); //тест изменений в объекте

// function runCode() {
//     let randomObject = {
//         x: 1,
//         y: 2,
//         z: 3
//     }

//     for (let key in randomObject) {
//         if (randomObject.hasOwnProperty(key) && typeof randomObject[key] === 'number') {
//             randomObject[key] = randomObject[key] * randomObject[key];
//         }
//     }
//     console.log(randomObject);
// } // задание на вывод квадратов элементов объекта




// ----- 6 -----
function runCode() {
    let obj = {};

    for (let i = 0; i < 10; i++) {
        for (key in obj) {
            if (key < 10) {
                key ++;
            }
        }
    }
    console.log(obj);
}

runCode();

