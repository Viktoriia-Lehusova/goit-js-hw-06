const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);
const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);
const value = document.querySelector('#value');
console.log(value);

let counterValue = 0;
let step = 1;

btnDecrement.addEventListener('click', () => {
  counterValue -= step;
  value.textContent = counterValue;
  console.log(counterValue);
  console.log('click on decrement');
});

btnIncrement.addEventListener('click', () => {
  counterValue += step;
  value.textContent = counterValue;
  console.log(counterValue);
  console.log('click on increment');
});
