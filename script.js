document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from local storage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(task => addTask(task, false));
  }

  // Save tasks array to local storage
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Add a task (with option to skip saving to local storage)
  function addTask(taskText, save = true) {
    if (!taskText.trim()) {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = function () {
      taskList.removeChild(li);

      const currentTasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
      saveTasks(currentTasks);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
      const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      currentTasks.push(taskText);
      saveTasks(currentTasks);
    }

    taskInput.value = '';
  }

  // Event listener for Add Task button
  addButton.addEventListener('click', () => {
    addTask(taskInput.value);
  });

  // Event listener for Enter key in input
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
    }
  });

  // Load existing tasks when the page loads
  loadTasks();

  // Auto focus input field
  taskInput.focus();
});
