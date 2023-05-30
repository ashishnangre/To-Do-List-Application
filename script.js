function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    var task = document.createElement("li");
    task.innerHTML = taskInput.value;
  
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function() {
      task.parentNode.removeChild(task);
    });
  
    task.appendChild(deleteButton);
    taskList.appendChild(task);
  
    taskInput.value = "";
  }
  