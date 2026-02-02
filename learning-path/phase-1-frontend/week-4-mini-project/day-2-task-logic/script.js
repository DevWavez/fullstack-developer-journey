// TASK 1: slect all the elements needed
const inputField = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addTask');
const taskList = document.querySelector('#taskList');

inputField.placeholder = 'Add  a new Task';

// TASK 2: add event listener to the button
addBtn.addEventListener('click', () => {
  console.log('Add Task button clicked');

  // TASK 3: get the value from the input field
  const taskText = inputField.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // TASK 4: create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = taskText;
  taskList.appendChild(listItem);

  // TASK 5: clear the input field
  inputField.value = '';
  inputField.placeholder = 'Add a new task';

  // TASK 6: add event listener to the list item for removal on click
  listItem.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  // Task 7: log the current tasks in the console
  const tasks = taskList.querySelectorAll('li');
  console.log('Current Tasks:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}: ${task.textContent}`);
  });
});
