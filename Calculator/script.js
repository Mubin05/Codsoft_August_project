const output = document.querySelector('.output');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const buttons = document.querySelector('.inner-grid');
buttons.addEventListener('click', function(event) {
  const target = event.target;
  if (target.matches('.button')) {
    const text = target.textContent;
    if (text === 'AC') {
      previousOperand.textContent = '';
      currentOperand.textContent = '';
    }
    else if (text === 'DEL') {
      currentOperand.textContent = currentOperand.textContent.slice(0, -1);
    }
    else if (text === '=') {
      try {
        const result = eval(previousOperand.textContent + currentOperand.textContent);
        previousOperand.textContent = '';
        currentOperand.textContent = result;
      } catch (error) {
        previousOperand.textContent = '';
        currentOperand.textContent = 'Error';
      }
    }
    else if (['+', '-', '*', '/'].includes(text)) {
      previousOperand.textContent = currentOperand.textContent + text;
      currentOperand.textContent = '';
    }
    else {
      currentOperand.textContent += text;
    }
  }
});
