let x = '';
let y = '';
let sign = '';

const buttons = document.querySelector('.buttons');
const screenValue = document.querySelector('.calc-screen p');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const signs = ['-', 'X', '+', '÷'];

buttons.addEventListener('click', (e) => {
  // Dont pushed on button
  if (!e.target.classList.contains('btn')) return;
  //   Clear values
  if (e.target.classList.contains('ac')) {
    x = '';
    y = '';
    sign = '';
    screenValue.textContent = '0';
    return;
  }

  screenValue.textContent = '';
  const key = e.target.textContent;
  if (digits.includes(key)) {
    if (y === '' && sign === '') {
      x += key;
      screenValue.textContent = x;
    } else if (x !== '' && sign !== '') {
      y += key;
      screenValue.textContent = y;
    }
  }

  if (signs.includes(key)) {
    sign = key;
    screenValue.textContent = sign;
  }

  if (e.target.textContent === '=') {
    switch (sign) {
      case '+':
        screenValue.textContent = +x + +y;
    }
  }

  console.log(x, y, sign);
});
