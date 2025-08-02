// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Prevent empty tasks
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create <li> element and set its content
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Attach event to remove task when clicked
        removeBtn.addEventListener('click', () => {
            taskItem.remove();  // Removes the <li> element itself
        });

        // Append the button to the <li> and <li> to the list
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        // Clear the input field after adding
        taskInput.value = '';
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing 'Enter' inside input
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
