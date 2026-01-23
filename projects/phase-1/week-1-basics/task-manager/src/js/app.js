// ===== DOM ELEMENTS =====
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// ===== STATE =====
let tasks = [];

// ===== LOCAL STORAGE =====
function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ===== FUNCTIONS =====

// Render all tasks
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.add('task-item');

    if (task.done) {
      li.classList.add('done');
    }

    // Task text
    const span = document.createElement('span');
    span.textContent = task.text;
    span.addEventListener('click', () => toggleTask(index));

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

  saveTasks();
}

// Add new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  tasks.push({
    text: taskText,
    done: false,
  });

  taskInput.value = '';
  renderTasks();
}

// Toggle done state
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// ===== EVENTS =====
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// ===== INITIALIZE =====
loadTasks();
renderTasks();
