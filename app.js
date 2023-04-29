const keyboardContainer = document.createElement('div');

keyboardContainer.classList.add('keyboard-container');

const keyboardKeys = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];
const displayValue = [];
const display = document.createElement('div');
display.classList.add('display');

keyboardKeys.forEach((row) => {
  const rowElement = document.createElement('div');
  rowElement.classList.add('keyboard-row');

  row.forEach((key) => {
    const keyElement = document.createElement('button');
    keyElement.classList.add('keyboard-key');
    keyElement.innerText = key;

    keyElement.addEventListener('click', () => {
      displayValue.push(key);
      display.innerHTML = displayValue.join('');
      keyElement.classList.toggle('activeBtn')
      setTimeout(()=>{
        keyElement.classList.toggle('activeBtn')},100);
    });

    rowElement.appendChild(keyElement);
  });

  keyboardContainer.appendChild(rowElement);
});

document.body.appendChild(keyboardContainer);
keyboardContainer.appendChild(display);

document.addEventListener('keypress', (e) => {
  const keys = document.querySelectorAll('.keyboard-key');
  const arr = Array.from(keys);

  arr.forEach((el) => {
    if (e.key == el.innerText) {
        displayValue.push(e.key);
        display.innerHTML = displayValue.join('');
       el.classList.toggle('activeBtn')
       setTimeout(()=>{
        el.classList.toggle('activeBtn')
       },100)
    }
  });
});
