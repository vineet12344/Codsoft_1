var taskListArray = [];

function submitTask() {
  var taskName = document.getElementById("taskinput").value;
  var InputField = document.getElementById("taskinput");
  if (!taskName.trim()) {
    alert("Please enter a task name.");
    return;
  }

  var todoObject = {
    taskId: taskListArray.length + 1,
    taskName: taskName,
  };

  taskListArray.push(todoObject);
  InputField.value = '';
  renderTask();
}

// function createTaskElement(task) {
//   var taskList = document.createElement("div");
//   var buttonContainer = document.createElement('div');
//   var TaskContainer = document.createElement('div');


//   buttonContainer.classList.add('buttonContainer');
//   taskList.classList.add("taskList");
//   taskList.appendChild(TaskContainer);
//   taskList.appendChild(buttonContainer);

//   var taskLabel = document.createElement("label");
//   taskLabel.textContent = task.taskName;
//   TaskContainer.appendChild(taskLabel);

//   var editIcon = document.createElement("i");
//   editIcon.classList.add("fa", "fa-edit");
//   editIcon.addEventListener("click", function() {
//     console.log("Edit clicked for task:", task);
//   });
//   editIcon.addEventListener("click", editTask);
//   buttonContainer.appendChild(editIcon);

//   var deleteIcon = document.createElement("i");
//   deleteIcon.classList.add("fa", "fa-trash");
//   deleteIcon.style.cursor = "pointer";
//   deleteIcon.addEventListener("click", deleteTask);
//   deleteIcon.taskId = taskListArray[index].taskId;
//   buttonContainer.appendChild(deleteIcon);

//   return taskList;
// }

function createTaskElement(task) {
  var taskList = document.createElement("div");
  var buttonContainer = document.createElement('div');
  var TaskContainer = document.createElement('div');

  buttonContainer.classList.add('buttonContainer');
  taskList.classList.add("taskList");
  taskList.appendChild(TaskContainer);
  taskList.appendChild(buttonContainer);

  var taskLabel = document.createElement("label");
  taskLabel.textContent = task.taskName;
  TaskContainer.appendChild(taskLabel);

  var editIcon = document.createElement("i");
  editIcon.classList.add("fa", "fa-edit");
  editIcon.addEventListener("click",() => editTask(task));
  buttonContainer.appendChild(editIcon);

  var deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-trash");
  deleteIcon.style.cursor = "pointer";
  deleteIcon.addEventListener("click", deleteTask);
  deleteIcon.dataset.taskId = task.taskId; // Use dataset.taskId to store taskId
  buttonContainer.appendChild(deleteIcon);

  return taskList;
}


function renderTask() {

  var taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML = "";
  taskListArray.forEach(function(task) {
    taskContainer.appendChild(createTaskElement(task));

  });

}

// function deleteTask(event){
//   debugger;
//   console.log("Delete clicked for task:", task);
//   var taskList = taskListArray.findIndex(m=>m.taskId == event.target.taskId);
//   taskListArray.splice(index,1);
//   renderTask();
// }

function deleteTask(event) {

  console.log("Delete clicked for task:", event.target.dataset.taskId);
  var taskId = event.target.dataset.taskId; // Access taskId from dataset
  var taskIndex = taskListArray.findIndex(task => task.taskId == taskId);
  if (taskIndex !== -1) {
    taskListArray.splice(taskIndex, 1); // Use taskIndex to remove task
    renderTask();
  }
}



function editTask(event) {
    var obj = taskListArray.find(m => m.taskId == event.taskId);
    document.getElementById('taskinput').value = obj.taskName;
    renderTask();
}

