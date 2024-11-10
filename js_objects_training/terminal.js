// ----- 10.1 ----- для терминала
// примитивы
// let test = {x: 1, y: 2, z: 3};
// console.log(test); // { x: 1, y: 2, z: 3 } - не примитив

// let test2 = {x: 1, y: 2, z: 3};
// console.log(test2.x); // 1 - примитив 

// let test3 = [1, 2, 3];
// console.log(test3); // [ 1, 2, 3 ] - не примитив

// let test4 = [1, 2, 3];
// console.log(test4[1]); // 2 - примитив


// let test51 = [1, 2, 3];
// let test52 = 1;

// console.log(test51); // [ 1, 2, 3 ] - не примитив


// let test61 = [1, 2, 3];
// let test62 = 1;

// console.log(test61[test62]); // 2 - примитив


// ссылки на объекты
// let object1 = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// let object2 = object1;
// object2['a'] = 'привет'
// object2.b = 'пока'

// console.log(object1); // { a: 'привет', b: 'пока', c: 3 }

// небольшие проверки
// проверка 1
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// console.log(arr2); // [ 'a', 2, 3 ]

// проверка 2
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[1] = 'b';

// console.log(arr1); // [ 'a', 'b', 3 ]

// проверка 3
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[0] = 'b';

// console.log(arr2); // [ 'b', 2, 3 ]


// константы
// const randomObject = {
//     x: 'а',
//     y: 'б',
//     z: 'в'
// } 
// // randomObject = 123; // error
// // randomObject = {x: 1, y: 2, z: 3}; // error
// randomObject.x = 'привет';

// console.log(randomObject);

// проверки
// проверка 1
// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr); // [ 'a', '!', 'c' ]

// проверка 2
// const arr = ['a', 'b', 'c'];
// arr = [1, 2, 3];
// console.log(arr); // error

// проверка 3
// const arr = ['a', 'b', 'c'];
// arr = ['a', 'b', 'c'];
// console.log(arr); // error

// const arr = [1, 2, 3, 4, 5];
// const arr1 = arr[1]; // можно обойтись и без этого, строка_98 const res = arr[1] + arr[2];
// const arr2 = arr[2]; // можно обойтись и без этого, строка_98 const res = arr[1] + arr[2];
// const res = arr1 + arr2;

// console.log(res);


// исправление ошибок (небольшие тестики)
// // тест 1 было
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj[x]); // error
// // тест 1 стало
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj.x);

// тест 2 было
// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';

// console.log(obj.key); // error
// // тест 2 стало
// console.log(obj[key]);

// // тест 3 было
// let obj = {x: 1, y: 2, z: 3};
// let sum = obj[x] + obj[y] + obj[x]; // errors

// console.log(obj);
// // // тест 3 стало
// let sum = obj['x'] + obj['y'] + obj['x'];

// console.log(sum);

// // тест 4 было
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj.length); // error undefined
// // // тест 4 стало
// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);


