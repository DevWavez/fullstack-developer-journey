let count = 0;

const counterEl = document.getElementById('counter');
const btnIncreasement = document.getElementById('btnIncrease');
const btnDecreasement = document.getElementById('btnDecrease');
const btnReset = document.getElementById('btnReset');

function updateCounter() {
  counterEl.textContent = count;

  if (count > 0) {
    counterEl.style.color = 'lime';
  } else if (count < 0) {
    counterEl.style.color = 'red';
  } else {
    counterEl.style.color = 'gray';
  }
}

btnIncreasement.addEventListener('click', () => {
  count++;
  updateCounter();
});

btnDecreasement.addEventListener('click', () => {
  count--;
  updateCounter();
});

btnReset.addEventListener('click', () => {
  count = 0;
  updateCounter();
});
