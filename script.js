document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();
        
        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create new list item element
        const li = document.createElement('li');
        
        // Set the text content of the list item
        li.textContent = taskText;
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Add click event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append remove button to list item
        li.appendChild(removeButton);
        
        // Add the new task to the list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = "";
    }
    
    // Add click event listener to the add button
    addButton.addEventListener('click', addTask);
    
    // Add keypress event listener to the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});