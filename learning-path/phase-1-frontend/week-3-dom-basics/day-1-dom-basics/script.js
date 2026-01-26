// TASK 1: select element
const message = document.getElementById('message');

// TASK 2: change text content
message.textContent = 'Hello, this text has been changed by JS!';

// Task 3: Add event listener to button
const btn = document.getElementById('changeTextBtn');
btn.addEventListener('click', function () {
  message.textContent = 'You just clicked the Button! DOM is interactive now.';
});

const resetBtn = document.getElementById('resetTextBtn');
resetBtn.addEventListener('click', function () {
  message.textContent = 'Hello, this text has been changed by JS!';
});
