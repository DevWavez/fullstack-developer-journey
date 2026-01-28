// TASK 1: Select all DOM Elements
const counterEl = document.getElementById('counter');
const counterStateEl = document.getElementById('state');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

// Create Local Storage
let count = Number(localStorage.getItem('count')) || 0;
localStorage.setItem('count', count);

function updateCounter() {
  counterEl.textContent = count;

  if (count > 0) {
    counterStateEl.textContent = 'Positive';
    counterStateEl.style.color = 'green';
    resetBtn.disabled = false;
  } else if (count < 0) {
    counterStateEl.textContent = 'Negative';
    counterStateEl.style.color = 'red';
    resetBtn.disabled = false;
  } else {
    counterStateEl.textContent = 'Neutral';
    counterStateEl.style.color = 'black';
    resetBtn.disabled = true;
  }

  localStorage.setItem('count', count);
}

// TASK 2: Add Event Listeners to Buttons
incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

// Initial update
updateCounter();
