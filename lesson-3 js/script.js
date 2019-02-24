let money = +prompt('How much money do you have');
console.log('Я маю ' + money);
let educationUniversity = 5000;
let house = 50000;
let BMW = 30000;
let seaPrice = 2000;

if (money > educationUniversity) {
    console.log('Ти можеш йти в університет');
    money = money - educationUniversity;
    console.log('В мене залишилось ' + money);
} else {
    console.log('Йди на роботу');
}

if (money > house) {
    console.log('Ти можеш купити дім');
    money = money - house;
    console.log('Я маю ' + money);
} else {
    console.log('Тобі не вистачає на дім ' + (house - money));
}

if (money > BMW) {
    console.log('Ти можеш купити BMW');
    money = money - BMW;
    console.log('Я маю ' + money);
} else {
    console.log('Тобі не вистачає на BMW');
}

if (money > seaPrice) {
    console.log('Ти можеш полетіти на море');
    money = money - seaPrice;
    console.log('Я маю ' + money);
} else {
    console.log('Тобі не вистачає на море');
}






