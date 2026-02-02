// TASK 1: slect all the elements needed
const inputField = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addTask');
const taskList = document.querySelector('#taskList');

inputField.placeholder = 'Add  a new Task';

let currentFilter = 'all';

// TASK 0: add event listener to input field (UX)

inputField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
// GLOBAL: Tasks Array loaded from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// TASK 1.1: function to add task to tasks array
function addTask(taskText) {
  const task = { id: Date.now(), text: taskText, completed: false };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// TASK 1.2: function to remove task from tasks array
function renderTasks() {
  taskList.innerHTML = ''; // Clear existing tasks

  let filteredTasks = tasks;
  if (currentFilter === 'active') {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (currentFilter === 'completed') {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  filteredTasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    li.dataset.id = task.id;

    if (task.completed) {
      li.classList.add('completed');
    }

    // Add event Listener to remove task on click
    li.addEventListener('click', () => {
      toggleTask(task.id);
    });

    taskList.appendChild(li);
  });

  updateCounter();
}

function updateCounter() {
  const completed = tasks.filter((task) => task.completed).length;
  const total = tasks.length;

  document.querySelector('#counter').textContent =
    `${completed} / ${total} completed`;
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

// TASK 2: add event listener to add button
addBtn.addEventListener('click', () => {
  const taskText = inputField.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  addTask(taskText);
  inputField.value = '';
  renderTasks();
});

renderTasks(); // Initial render to display tasks from localStorage
