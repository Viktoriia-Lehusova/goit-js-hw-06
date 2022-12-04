const input = document.querySelector('#name-input');
console.log(input);
const userName = document.querySelector('#name-output');
console.log(userName);

input.addEventListener('input', () => {
  if (input.value === '') {
    userName.textContent = 'Anonymous';
  } else {
    userName.textContent = input.value;
  }
});
