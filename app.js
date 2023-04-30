const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');

const keyboardKeys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\'],
  ['`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
];
const digitKey = [
  '§',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
];
//  const spesialKeys = ['-', '=', '[', ']', ';', `'`, '\\', ',', '.', '/'];

const displayValue = [];
const display = document.createElement('div');
display.classList.add('display');
keyboardContainer.appendChild(display);

const digitContainer = document.createElement('div');
digitContainer.classList.add('keyboard-row');

digitKey.forEach((key) => {
  const keyElement = document.createElement('button');
  keyElement.classList.add('keyboard-key');
  keyElement.innerText = key;
  switch (key) {
    case '-':
      keyElement.code = 'Minus';
      break;
    case '§':
      keyElement.code = 'Backquote';
      break;
    case '=':
      keyElement.code = 'Equal';
      break;
    default:
      keyElement.code = `Digit${key.toUpperCase()}`;
      keyElement.classList.add(`digit${key}`);
      break;
  }
  keyElement.addEventListener('click', () => {
    displayValue.push(key);
    display.innerHTML = displayValue.join('');
    keyElement.classList.toggle('activeBtn');
    setTimeout(() => {
      keyElement.classList.toggle('activeBtn');
    }, 100);
  });
  digitContainer.appendChild(keyElement);
});
keyboardContainer.appendChild(digitContainer);

keyboardKeys.forEach((row) => {
  const rowElement = document.createElement('div');
  rowElement.classList.add('keyboard-row');

  row.forEach((key) => {
    const keyElement = document.createElement('button');
    keyElement.classList.add('keyboard-key');
    keyElement.innerText = key;
    switch (key) {
      case '-':
        keyElement.code = 'Minus';
        break;
      case '=':
        keyElement.code = 'Equal';
        break;
      case '[':
        keyElement.code = 'BracketLeft';
        break;
      case ']':
        keyElement.code = 'BracketRight';
        break;
      case ';':
        keyElement.code = 'Semicolon';
        break;
      case "'":
        keyElement.code = 'Quote';
        break;
      case '\\':
        keyElement.code = 'Backslash';
        break;
      case ',':
        keyElement.code = 'Comma';
        break;
      case '.':
        keyElement.code = 'Period';
        break;
      case '/':
        keyElement.code = 'Slash';
        break;
      case '`':
        keyElement.code = 'IntlBackslash';
        break;
      default:
        keyElement.code = `Key${key.toUpperCase()}`;
        break;
    }

    keyElement.addEventListener('click', () => {
      displayValue.push(key);
      display.innerHTML = displayValue.join('');
      keyElement.classList.toggle('activeBtn');
      setTimeout(() => {
        keyElement.classList.toggle('activeBtn');
      }, 100);
    });

    rowElement.appendChild(keyElement);
  });

  keyboardContainer.appendChild(rowElement);
});

const shift = document.createElement('button');
shift.classList.add('shift');
shift.innerText = 'shift';
shift.addEventListener('click', () => {
  shift.classList.toggle('activeBtn');
  setTimeout(() => {
    shift.classList.toggle('activeBtn');
  }, 100);
});

keyboardContainer.appendChild(shift);

document.body.appendChild(keyboardContainer);

document.addEventListener('keypress', (e) => {
  const keys = document.querySelectorAll('.keyboard-key');
  const arr = Array.from(keys);
  console.log(e);

  displayValue.push(e.key);
  display.innerHTML = displayValue.join('');

  arr.forEach((el) => {
    if (el.code === e.code) {
      el.classList.toggle('activeBtn');
      setTimeout(() => {
        el.classList.toggle('activeBtn');
      }, 100);
    }
  });
});
document.addEventListener('keydown', (e) => {
  if (e.shiftKey) {
    shift.classList.add('activeBtn');
  }
});
document.addEventListener('keyup', (e) => {
  if (!e.shiftKey) {
    shift.classList.remove('activeBtn');
  }
});
