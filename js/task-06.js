const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add('invalid');
  } else {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
  return onInputBlur;
}
