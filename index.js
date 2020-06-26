"use strict";
//
// const familyPopulation = Number(prompt('Count:'));
// const userFamily = {};
//
// for ( let i=0; i<familyPopulation;i++){
//     userFamily[prompt('Name:')] = {
//         status: prompt('Age:'),
//         age: prompt('Age:')
//     }
// }
//
// console.log(userFamily)

// const multiplicationTable = {};
// for (let i = 1; i < 11; i++) {
//     for (let j = 1; j < 11; j++) {
//         console.log(`${multiplicationTable[`${i} * ${j} = `] = i * j}`);
//         console.log('\r \t')
//     }
//     console.log('\n')
// }
//  const  arr1 = [1,2,3,4,5];
//  delete arr1[2];
//  console.log (arr1.length);
// console.log (arr1);

// function sum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += Number(arguments[i]);
//     }
//     return result
// }
//
// console.log(sum(1, 2, 5, 7, 9));

// const animal = {
//     name: null,
//     type: null,
//     eat() {
//         switch (this.type) {
//             case "herbivore":
//                 return alert(`${this.name} eat grass!`);
//             case "omnivore":
//                 return alert(`${this.name} eat meat!`);
//             case "carnivorous":
//                 return alert(`${this.name} eat everything!`);
//         }
//
//     },
//     speek() {
//         alert(`${this.name} are speaking!`)
//     },
// };
//
// const cow = Object.create(animal, {
//     name: {value: 'cow'},
//     type: {value: 'herbivore'},
// });
// const tiger = Object.create(animal, {
//     name: {value: 'tiger'},
//     type: {value: 'omnivore'},
// });
// const bear = Object.create(animal, {
//     name: {value: 'bear'},
//     type: {value: 'carnivorous'},
// });
//
// cow.eat();
// tiger.eat();
// bear.eat();


// 1. Вывести # столько раз, сколько указал пользователь.
//
// const number1 = Number(prompt('Input your value:'));
// for (let i=0; i<number1; console.log('#'), i++){};
//___________________________________________________________


//  2. Пользователь ввел число, а на экран вывелись все числа
//  от введенного до 0.
//
// const number2 = Number(prompt('Input your value:'));
// for (let i=number2; i>=0; console.log(i), i--){};
//_______________________________________________________

//3. Запросить число и степень. Возвести число в указанную
//степень и вывести результат.
//
// const number3 = Number(prompt('Input your value:'));
// const power = Number(prompt('Input your power:'));
// let result = number3;
// for (let i=1; i<power; i++){
//     result*=number3
// };
// console.log(result);
//_______________________________________________________

// 4. Запросить 2 числа и найти все общие делители.
// const number4 = Number(prompt('Input first value:'));
// const number5 = Number(prompt('Input second value:'));
// const min = number4 < number5 ? number4 : number5;
// for (let i = 1; i <= min; i++) {
//     if (number4 % i === 0 && number5 % i === 0) {
//         console.log(i)
//     }
// }
// ;
//________________________________________________________


//5. Посчитать факториал введенного пользователем числа.
// alert(fac(Number(prompt('Input first value:'))));
// function fac(n) {
//     if (n < 0) {
//     return 'ERROR';
//     }
//     if (n === 0 || n === 1) {
//     return 1;
//     }
//     return n * fac(n - 1);
// }
//___________________________________________________________

// 1. Предлагать пользователю решить пример 2 + 2 * 2 до тех
//  пор, пока он не решит его правильно.
//
// while (prompt('Decide 2 + 2 * 2 =') !== '6');
// alert('Cool!!!');
//_____________________________________________________________


//2. Делить число 1000 на 2 до тех пор, пока не получится число
//  меньше 50. Вывести это число и сколько делений произвели.
//
// let number6=1000;
// let count = 0;
//
// while (number6/2>=50){
//     count++;
//     number6/=2;
// };
// console.log(`num = ${number6}, count = ${count}`);
//_____________________________________________________________

//3. Вывести все числа от 1 до 100, которые кратные указанному
//  пользователем числу.
//
// const number7 = Number(prompt('Input your number:'));
// let count = 1;
// while (true){
//     if (count%number7){
//         console.log(count)
//     }
// };



