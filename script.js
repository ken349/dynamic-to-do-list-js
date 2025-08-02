document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // ✅ Required format for checker:
        removeBtn.onclick = function () {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    // ✅ Add button listener
    addButton.addEventListener('click', addTask);

    // ✅ Enter key listener
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
