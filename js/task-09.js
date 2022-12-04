const body = document.querySelector('body');
console.log(body);
const colorName = document.querySelector('.color');
console.log(colorName);
const btnChangeColor = document.querySelector('.change-color');
console.log(btnChangeColor);

// form.addEventListener('submit', onFormSubmit);
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
// console.log(getRandomHexColor);
