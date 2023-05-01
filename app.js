const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');

const keyboardKeys = [
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\'],
  ['Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'au', 'shift'],
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


const displayValue = [];
const display = document.createElement('textarea');
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
    keyElement.addEventListener('click', () => {
      displayValue.push(key);
      display.innerHTML = displayValue.join('');
      keyElement.classList.toggle('activeBtn');
      setTimeout(() => {
        keyElement.classList.toggle('activeBtn');
      }, 100);
    });
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
    rowElement.appendChild(keyElement);
  });
  keyboardContainer.appendChild(rowElement);
});


document.body.appendChild(keyboardContainer);

const specialKeys = [
  'control',
  'option',
  'cmd',
  'space',
  'command',
  'opt',
];

specialKeys.forEach((key) => {
  const keyElement = document.createElement('button');
  keyElement.classList.add('keyboard-key');
  keyElement.innerHTML = key;
  switch (key) {
    case 'control':
      keyElement.code = 'ControlLeft';
      keyElement.classList.add('ControlLeft');
          break;
        case 'option':
          keyElement.code = 'AltLeft';
          keyElement.classList.add('AltLeft');
          break;
        case 'cmd':
          keyElement.code = 'MetaLeft';
          keyElement.classList.add('MetaLeft');
          break;
        case 'space':
          keyElement.code = 'Space';
          keyElement.classList.add('Space');
          break;
        case 'command':
          keyElement.code = 'MetaRight';
          keyElement.classList.add('MetaRight');
          break;
        case 'opt':
          keyElement.code = 'AltRight';
          keyElement.classList.add('AltRight');
          break;
        case 'ArrowRight':
          keyElement.code = 'ControlLeft';
          keyElement.classList.add('ControlLeft');
          break;
        case 'ArrowLeft':
          keyElement.code = 'ArrowLeft';
          keyElement.classList.add('ArrowLeft');
          break;

        case 'ArrowDown':
          keyElement.code = 'ArrowDown';
          keyElement.classList.add('ArrowDown');
          break;
  }

  keyElement.addEventListener('click', () => {
    keyElement.classList.toggle('activeBtn');
    setTimeout(() => {
      keyElement.classList.toggle('activeBtn');
    }, 100);
  });

  keyboardContainer.appendChild(keyElement);
});

const spesialLeft=['Tab', 'Shift', 'CapsLock',]
spesialLeft.forEach(()=>{
  const keyElement = document.createElement('button');
  keyElement.classList.add('keyboard-key');
  keyElement.innerHTML = key;
  switch (key) {
  case 'Tab':
    keyElement.code = 'Tab';
    keyElement.classList.add('tab');
    break;
  case 'Shift':
    keyElement.code = 'ShiftLeft';
    keyElement.classList.add('shiftleft');
    break;
  case 'CapsLock':
    keyElement.code = 'CapsLock';
    keyElement.classList.add('caps');
    break;
  case 'shift':
    keyElement.code = 'ShiftRight';
    keyElement.classList.add('shiftright');
    break;
    case 'au':
      keyElement.code = 'ArrowUp';
      keyElement.classList.add('ArrowUp');
      break;
}
keyboardContainer.appendChild(keyElement);
}
)

document.addEventListener('keypress', (e) => {
  console.log(e);
  const keys = document.querySelectorAll('.keyboard-key');
  const arr = Array.from(keys);
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
console.log(e);
  toggle(e);
});

document.addEventListener('keyup', (e) => {
  toggle(e);
});

function toggle(e) {
  const keys = document.querySelectorAll('.keyboard-key');
  const arr = Array.from(keys);
  arr.forEach((el) => {
    if (el.code === e.code) {
      switch (el.code) {
        case 'Tab':
          el.classList.toggle('activeBtn');
tab()
          break;
        case 'CapsLock':
          el.classList.toggle('activeBtn');
          break;
        case 'ShiftLeft':
          el.classList.toggle('activeBtn');
          break;
        case 'ShiftRight':
          el.classList.toggle('activeBtn');
          break;
        case 'ControlLeft':
          el.classList.toggle('activeBtn');
          break;
        case 'AltLeft':
          el.classList.toggle('activeBtn');
          break;
        case 'MetaLeft':
          el.classList.toggle('activeBtn');
          break;
        case 'Space':
          el.classList.toggle('activeBtn');
          break;
        case 'MetaRight':
          el.classList.toggle('activeBtn');
          break;
        case 'AltRight':
          el.classList.toggle('activeBtn');
          break;
        case 'ArrowRight':
          el.classList.toggle('activeBtn');
          break;
        case 'ArrowLeft':
          el.classList.toggle('activeBtn');
          break;
        case 'ArrowUp':
          el.classList.toggle('activeBtn');
          break;
        case 'ArrowDown':
          el.classList.toggle('activeBtn');
          break;
      }
    }
  });
}
function tab(){
  for(let i = 0; i<4; i++){
    displayValue.push(' ');
    display.innerHTML = displayValue.join('');}
  
}


function addEventListen (key, element) {
  displayValue.push(key);
  display.innerHTML = displayValue.join('');
  element.classList.toggle('activeBtn');
  setTimeout(() => {
    element.classList.toggle('activeBtn');
  }, 100);
}