const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const result = document.getElementById('result');

document.getElementById('add').addEventListener('click', () => {
  result.value = Number(number1.value || 0) + Number(number2.value || 0);
});

document.getElementById('subtract').addEventListener('click', () => {
  result.value = Number(number1.value || 0) - Number(number2.value || 0);
});

document.getElementById('multiply').addEventListener('click', () => {
  result.value = Number(number1.value || 0) * Number(number2.value || 0);
});


document.getElementById('divide').addEventListener('click', () => {
  const value2 = Number(number2.value);
  if (value2 === 0) {
    result.value = 'No division by zero';
  } else {
    result.value = Number(number1.value || 0) / value2;
  }
});

let resultButton = document.getElementById('result');
resultButton.style.visibility='visible';
resultButton.innerText = result ;

document.getElementById('number1').value='';
document.getElementById('number2').value='';
number1 = 0;
number2 = 0;
