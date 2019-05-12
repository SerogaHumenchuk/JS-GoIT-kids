const table = document.querySelector('table');
const input = document.querySelector('input');

const getElemCalcValue = function(event) {
  if (
    input.value === '0' ||
    input.value === '-' ||
    input.value === '*' ||
    input.value === '+' ||
    input.value === '=' ||
    input.value === '÷'
  ) {
    input.value = input.value.substr(1);
  }
  if (event.target.nodeName === 'TD' && event.target.textContent === 'DEL') {
    input.value = input.value.slice(0, -1);
  } else if (event.target.classList.contains('math')) {
    input.value = event.target.textContent;
  } else if (event.target.nodeName === 'TD') {
    input.value += event.target.textContent;
  }
};

table.addEventListener('click', getElemCalcValue);
