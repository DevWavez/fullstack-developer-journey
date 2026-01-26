const form = document.getElementById('userForm');
const output = document.getElementById('feedback');
const inputField = document.getElementById('username');

// Live input feedback
inputField.addEventListener('input', function () {
  const value = inputField.value.trim();

  if (value === '') {
    output.textContent = 'Input cannot be empty';
    output.style.color = 'red';
    return;
  }

  if (value.length < 3) {
    output.textContent = 'Username is too short';
    output.style.color = 'red';
    return;
  }

  output.textContent = `Username looks good: ${value}`;
  output.style.color = 'green';
});

// Form submit
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const value = inputField.value.trim();

  if (value.length < 3) {
    output.textContent = 'Please enter a valid username before submitting';
    output.style.color = 'red';
    return;
  }

  output.textContent = `Welcome, ${value}!`;
  output.style.color = 'green';
});
