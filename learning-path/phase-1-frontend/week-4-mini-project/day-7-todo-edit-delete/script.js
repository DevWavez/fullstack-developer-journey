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
    li.innerHTML = `
  <span class="task-text">${task.text}</span>
  <button class="delete-btn">❌</button>
`;

    li.dataset.id = task.id;

    if (task.completed) {
      li.classList.add('completed');
    }

    const textSpan = li.querySelector('.task-text');

    textSpan.addEventListener('dblclick', () => {
      const input = document.createElement('input');
      input.value = task.text;
      input.classList.add('edit-input');

      li.replaceChild(input, textSpan);
      input.focus();

      input.addEventListener('blur', () => {
        task.text = input.value.trim() || task.text;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') input.blur();
      });
    });

    taskList.appendChild(li);
  });

  updateCounter();
}

taskList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  // DELETE
  const taskId = Number(li.dataset.id);
  if (e.target.classList.contains('delete-btn')) {
    deleteTask(taskId);
    return;
  }

  // TOGGLE
  if (e.target.classList.contains('task-text')) {
    toggleTask(taskId);
  }
});

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

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

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
