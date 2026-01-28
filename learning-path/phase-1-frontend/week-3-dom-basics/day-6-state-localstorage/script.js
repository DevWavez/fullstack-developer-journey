// TASK 1: Select the elements from the DOM
const counterEl = document.getElementById('count');
const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');

// TASK 2: Initialize localStorage value
let count = Number(localStorage.getItem('count')) || 0; // Initialize count first
localStorage.setItem('count', count); // Then set it in localStorage

function updateCounter() {
  counterEl.textContent = count;

  if (count > 0) {
    counterEl.style.color = 'green';
  } else if (count < 0) {
    counterEl.style.color = 'red';
  } else {
    counterEl.style.color = 'black';
  }
}

// TASK 3: Update localStorage on button clicks
btnIncrease.addEventListener('click', () => {
  count++;
  localStorage.setItem('count', count);
  updateCounter();
});

btnDecrease.addEventListener('click', () => {
  count--;
  localStorage.setItem('count', count);
  updateCounter();
});

btnReset.addEventListener('click', () => {
  count = 0;
  localStorage.setItem('count', count);
  updateCounter();
});

// Initial call to display the correct count on page load
updateCounter();
