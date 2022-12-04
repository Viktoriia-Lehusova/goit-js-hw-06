const items = document.querySelectorAll('.item');

console.log('Number of categories:', items.length);

const title = document.querySelectorAll('h2');
const list = document.querySelectorAll('ul');
const newList = [...list].splice(1, 3);

for (let i = 0; i < title.length; i += 1) {
  const titleCategory = title[i].textContent;
  const listElements = newList[i].children.length;
  console.log('Category:', titleCategory, 'Elements:', listElements);
}
