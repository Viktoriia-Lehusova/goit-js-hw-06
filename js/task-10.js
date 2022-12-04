function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBox = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

input.addEventListener('input', onInputValue);

function onInputValue(event) {
  console.log('value', input.value);
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  divBox.innerHTML = '';
  input.value = '';
}

function createBoxes(amount) {
  amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    const boxes = document.createElement('div');
    const boxStyle = 30 + i * 10;
    boxes.style = `width: ${boxStyle}px; height: ${boxStyle}px; background-color: ${getRandomHexColor(
      boxes.style.backgroundColor
    )}`;
    divBox.append(boxes);
    console.log(boxes);
  }
}
