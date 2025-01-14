// Change Button Color
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
  colorButton.classList.toggle('active');
});

// Greeting Message Based on Time
const greetButton = document.getElementById('greetButton');
greetButton.addEventListener('click', () => {
  const hours = new Date().getHours();
  let message;
  if (hours < 12) {
    message = 'Good Morning!';
  } else if (hours < 18) {
    message = 'Good Afternoon!';
  } else {
    message = 'Good Evening!';
  }
  alert(message);
});

// Basic Calculator
const calcButton = document.getElementById('calcButton');
calcButton.addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultElement = document.getElementById('calcResult');

  if (!isNaN(num1) && !isNaN(num2)) {
    resultElement.textContent = `Result: ${num1 + num2}`;
  } else {
    resultElement.textContent = 'Please enter valid numbers.';
  }
});
