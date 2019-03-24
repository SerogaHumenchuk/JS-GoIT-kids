/*
 * Есть массив имен пользователей users
 *
 * Напиши цикл, который для каждого пользователя будет выводить в консоль
 * сообщение в формате [номер элемента] - [значение элемента].
 *
 * Нумерация должна начинаться с 1. К примеру для первого элемента массива
 * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
 *
 * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
 */

// const users = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']

// for (let i = 0; i < users.length; i++) {
//   console.log(i + ' - ' + users[i])
// }

//////////////////////////////////////////////////////////////////////////

// /*
//  * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
//  * Гравировка одного слова стоит 10 кредитов.
//  */
// // В переменной message хранится произвольная строка
// const message = 'Proin sociis natoque et magnis parturient montes mus'
// let price = 0
// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// const words = message.split(' ')
// console.log(words)
// // Выведи в консоли длину массива words
// console.log(words.length) // 8
// // Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// price = 10 * words.length
// console.log(price) // 80

/*
  Напиши функцию checkForSpam(str)
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки
console.log(checkForSpam('Latest technology news')) // false

console.log(checkForSpam('JavaScript weekly newsletter')) // false

console.log(checkForSpam('Get best sale offers now!')) // true

console.log(checkForSpam('[SPAM] How to earn fast money?')) // true
