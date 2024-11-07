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

// хламориант
// function runCode() {
//     let obj = {
//         a: 1,
//         b: 2,
//         c: 3
//     }

//     let result = 0;

//     for (let i = 0; i < Object.keys(obj); i++) {
//         obj[i * i];
//     }   

//     console.log(obj);
// }

// здоровый вариант
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





function runCode() {
    // ----- 6 -----
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
    // let chetObject = {
    //     a: 1,
    //     b: 2, 
    //     c: 3, 
    //     d: 4, 
    //     e: 5,
    //     f: 6,
    //     g: 7 
    // };

    // function filteredChetObject(obj) {
    //     let filteredObject = Object.fromEntries(Object.entries(obj).filter(([key, value]) => value % 2 === 0));
    //     return console.log(filteredObject);
    // }
    // filteredChetObject(chetObject);


    // ----- 7 -----
    // перебор массива объектов
    // нужно получить массива объектов объект Bob и записать его в переменную
    // let user = [
    //     {
    //         name: "John",
    //         age: 30
    //     },
    //     {
    //         name: "Bob",
    //         age: 21
    //     },
    //     {
    //         name: "Anna",
    //         age: 19
    //     }
    // ] 
    

    // function arrayObjSearch(array) {
    //     let searchName = "Bob";
    //     let newVariable = array.find(element => element.name === searchName);
    //     return console.log(newVariable);
    // }
    // arrayObjSearch(user)


    // ----- 8 -----
    // проверка что объект не пустой, и в нем есть определенный ключ
    // let person = {
    //     name: "Klaus",
    //     surname: "Badelt",
    //     age: 21
    // }
    // let needKey = 'surname';
    
    // // выводит строку badelt в виде массива от 0 до 5
    // // let searchKey = Object.keys(person['surname']);
    // // console.log(searchKey) 

    // function notEmpty(obj) {
    //     if (Object.keys(obj).length === 0) {    
    //         console.log("Объект пустой");
    //     } else {
    //         let searchKey = Object.keys(obj).find(key => key === needKey);
            
    //         if (searchKey) {
    //             console.log(obj[searchKey]);
    //         } else {
    //             console.log(`Ключ ${needKey} в объекте не найден`);
    //         }

    //         return console.log(searchKey);
    //     }
    // }
    // notEmpty(person);


    // ----- 8 -----
    // перебор массива объектов
    // нужно удалить из массива объектов объект с name Anna
    let users = [
        {
            name: "John",
            age: 30
        },
        {
            name: "Bob",
            age: 21
        },
        {
            name: "Anna",
            age: 19
        }
    ] 

    function deleteObjectFromArray(array, deleteName) {
        // эта чепуха создаст новый объект, притом пустой, если убрать .filter ..... то уже будет не пустой
        // let deletedObject = Object.fromEntries(Object.entries(array).filter(([key, value]) => value === 'Anna'));
        // return console.log(deletedObject);
        let deletedObject = array.filter(person => person.name === deleteName);
        return console.log(deletedObject);
    }
    deleteObjectFromArray(users, 'Anna');
    console.log(users);
}

runCode();

