// // callback - функции
// // карикатура
// const first = () => {
//     console.log(1);
// };

// const second = () => {
//     console.log(2);
// };

// first();
// second();
// console.log('----');
// // все нормально, функции выполняются друг за другом


// const firstSetTime = () => {
//     setTimeout(() => {
//         console.log(1);
//     }, 500);
// };

// firstSetTime();
// second();
// // вторая выполниится раньшше


// const doHomework = (subject) => {
//     alert(`Начало работы над моей ${subject}`);
// };

// doHomework('math');
// // вывод -- Начало работы над моей math

// // callback, определенный в функции
// const doHomeworkCallback = (subject, callback) => {
//     alert(`Начало работы над моей ${subject}`);
//     callback();
// };

// doHomeworkCallback('math', () => {
//     alert('finished my homework')
// });
// // вывод -- Начало работы над моей math -- finished my homework


// // callback, определенный вне функции
// const doHomeworkCallbackTwo = (subject, callback) => {
//     alert(`Начало работы над моей ${subject}`);
//     callback();
// };

// const alertFinished = () => {
//     alert('finished my homework');
// };

// doHomeworkCallbackTwo('math', alertFinished);
// // вывод -- Начало работы над моей math -- finished my homework


// дополнение к первому
const firstCallback = (callback) => {
    // имитируем запрос к API
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
};

const secondCallback = () => {
    console.log(2);
};

firstCallback(secondCallback);

