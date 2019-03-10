let emailes = ['apple@gmail.com', 'samsung@gmail.com', 'xiaomi@gmail.com'];

let userEmail = prompt('Enter email');


if(emailes.includes(userEmail) || !userEmail.includes('@')) {
    alert('Enter other email')
} else {
    emailes.push(userEmail)
    alert('Welcome')
}

console.log(emailes);


