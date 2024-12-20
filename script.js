// script.js

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-btn');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    // Function to add a new task
    function addTask(taskText) {
      if (taskText.trim() === '') return; // Don't add empty tasks
  
      const li = document.createElement('li');
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      li.appendChild(taskSpan);
  
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-btn');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        li.remove(); // Remove the task when clicked
      });
      li.appendChild(deleteButton);
  
      // Mark task as completed on click
      taskSpan.addEventListener('click', function () {
        li.classList.toggle('completed');
      });
  
      todoList.appendChild(li);
    }
  
    // Add task when the "Add" button is clicked
    addButton.addEventListener('click', function () {
      const taskText = inputField.value;
      addTask(taskText);
      inputField.value = ''; // Clear input field
    });
  
    // Add task when Enter key is pressed
    inputField.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const taskText = inputField.value;
        addTask(taskText);
        inputField.value = ''; // Clear input field
      }
    });
  });
  