function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBox = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

input.addEventListener('input', onInputValue);
btnCreate.addEventListener('click', onBtnCreateBox);
btnDestroy.addEventListener('click', destroyBoxes);

function onInputValue(event) {
  numberBox = Number(event.currentTarget.value);
}

function destroyBoxes(event) {
  divBox.innerHTML = '';
  input.value = '';
}

let boxSize = 30;
let numberBox = 0;

function onBtnCreateBox() {
  createBoxes(numberBox);
  numberBox = '';
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxes = document.createElement('div');
    const boxStyle = boxSize + i * 10;
    boxes.style = `width: ${boxStyle}px; height: ${boxStyle}px; background-color: ${getRandomHexColor(
      boxes.style.backgroundColor
    )}`;
    divBox.append(boxes);
    console.log(boxes);
  }
}
