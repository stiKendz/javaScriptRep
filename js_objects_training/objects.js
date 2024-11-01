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
    // let obj = {};

    // let keys = [1, 2, 3, 4];
    // let values = ['a', 'b', 'c', 'd'];
    
    // for (let i = 0; i < 4; i++) {
    //     // let key = keys[i];
    //     // let value = values[i];
    //     // obj[key] = value;

    //     //или

    //     for (let i = 0; i < 4; i++) {
    //         obj[keys[i]] = values[i];
    //     }
    // }

    // задания на создания объектов
    // let weekdayNames = ['пн','вт','ср','чт','пт','сб','вс'];
    // let daysNum = [1, 2, 3, 4, 5, 6, 7];
    // let weekObject = {};

    // for (let i = 0; i < daysNum.length; i++) {
    //     weekObject[[daysNum[i]]] = weekdayNames[i];
    // }

    // console.log(weekObject)
    // alert(weekObject['1']); для окна браузера

    // перебор объекта и создание из него нового, котором будут только четные числа
    let chetObject = {a: 1, b: 2, c: 3, d: 4, e: 5};
    let newObject = {};
    function chetniyeNumbers(obj) {
        let newKeys = [];
        let newEntires = [];
        
        newKeys = Object.keys(chetObject);
        newEntires = Object.entries(chetObject);
        let filteredEntires = newEntires.filter((element) => element % 2 === 0);

        console.log(filteredEntires)

        for (let i = 0; i < newKeys.length; i++) {
            newObject[newKeys[i]] = newEntires[i];
        }
        return console.log(newObject);
    }
    chetniyeNumbers(chetObject)
}

runCode();

