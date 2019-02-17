let gav = confirm('Do you have a home animals?');

if(gav === true) {
  let name = prompt('What is your home animal\'s name?');
  alert(name + ' is your home animal');
  // запитати в користувача яка в нього тварина: собака, кішка, інший варіант
  let isKindOfAnimal = prompt('What kind of animal do you have?');
  // якщо користувач написав кішка - показати в алерті ви маєте кішку
  // якщо  собака - показати в алерті ви маєте собаку
  // якщо користувач ввів і не собаку і не кішку - показати в алерті ваша тварина і не собака і не кішка
  if(isKindOfAnimal === 'cat') {
    alert(name + ' is your cat')
  } else if(isKindOfAnimal === 'dog'){
    alert(name + ' is your dog')
  } else {
      alert(name + ' isn\'t cat and isn\'t dog')
  }
} else {
    alert('You have to buy a home animals')
}





