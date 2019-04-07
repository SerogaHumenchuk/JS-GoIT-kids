'use strict';

/*  
  Напиши скрипт, который, для объекта user, последовательно: 
    - добавляет поле mood со значением 'happy'
    - заменяет значение hobby на 'javascript'
    - заменяет значение premium на false
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
//   // mood: 'happy'
// };
// user.mood = 'happy';
// user.hobby = 'js';

// for (let el in user) {
//   console.log(el + ': ' + user[el]);
// }

// 222222222222222222222222222222222222222222222222
/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 129,
//   lorence: 99,
// };

// const fn = function() {
//   let theBiggest = 0;
//   let name;
//   for (let user in tasksCompleted) {
//     if (tasksCompleted[user] > theBiggest) {
//       theBiggest = tasksCompleted[user];
//       name = user;
//     }
//   }
//   return name + ': ' + theBiggest;
// };
// console.log(fn());

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 129,
//   lorence: 99,
// };

// const namesArray = Object.keys(tasksCompleted);
// console.log(namesArray);

// const valuesArray = Object.values(tasksCompleted);
// console.log(valuesArray);

// const usersArr = Object.entries(tasksCompleted);
// console.log(usersArr);

// .............................................................................

// const FE_kids_1 = {
//   David: '098-234-23-32',
//   Ilya: '093-224-22-12',
//   Serafym: '068-234-37-52',
// };

// const FE_kids_2 = {
//   Vova: '098-234-23-23',
//   Vasya: '093-212-26-51',
//   Petya: '068-321-23-54',
// };

// const studentsGoIteens = Object.assign(FE_kids_1, FE_kids_2);
// console.log(studentsGoIteens);

// const YarikStudent = '23 324 324 4';

// const FE_kids_1 = {
//   David: '098-234-23-32',
//   Ilya: '093-224-22-12',
//   Serafym: '068-234-37-52',
// };

// FE_kids_1.Yarik = YarikStudent;
// console.log(FE_kids_1);

