// Select the element once
const text = document.getElementById('text');

// Change text color
document.getElementById('btnRed').addEventListener('click', function () {
  text.style.color = 'red';
});

document.getElementById('btnGreen').addEventListener('click', function () {
  text.style.color = 'green';
});

// Toggle highlight class
document.getElementById('btnToggle').addEventListener('click', function () {
  text.classList.toggle('highlight');
});

// Toggle large text class
document.getElementById('btnSize').addEventListener('click', function () {
  text.classList.toggle('largetext');
});
