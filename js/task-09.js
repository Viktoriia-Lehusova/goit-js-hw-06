const body = document.querySelector('body');
const colorName = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColor.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  body.style.backgroundColor = getRandomHexColor(body.style.backgroundColor);
  colorName.textContent = body.style.backgroundColor;
  return event;
}
