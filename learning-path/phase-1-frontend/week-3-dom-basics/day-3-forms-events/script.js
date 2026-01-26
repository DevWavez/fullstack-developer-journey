// TASK 1: Select the element and store it in a variable
const btn = document.getElementById('submitBtn');
const output = document.getElementById('output');
const input = document.getElementById('username');

// TASK 2: Create a function that will be called when the button is clicked
function handleClick() {
  const userInput = input.value; // Get the value from the input field

  if (userInput.length < 3)
    output.textContent = `Username must be at least 3 characters long.`;
  else output.textContent = `You entered the Username: ${userInput}`; // Display the input value in the output paragraph
}

// TASK 3: Add an event listener to the button that calls the function when clicked
btn.addEventListener('click', handleClick);
