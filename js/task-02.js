const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('ul');
console.log(list);

for (let ingredient of ingredients) {
  const item = document.createElement('li');
  item.classList.add('item');
  console.log((item.textContent = ingredient));
  list.after(item);
}
