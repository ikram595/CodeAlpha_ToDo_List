var priority = 1;
var uncompletedTasksContainer =
  document.getElementsByClassName("uncompleted_tasks")[0];
var completedTasksContainer =
  document.getElementsByClassName("completed_tasks")[0];
let uncompletedTasksList = document.getElementById("uncompleted_tasks_list");
let completedTasksList = document.getElementById("completed_tasks_list");

function addTask() {
  let userInput = document.getElementById("task_input").value;
  //console.log(userInput);
  if (userInput !== "") {
    let newTaskDiv = document.createElement("li");
    newTaskDiv.classList.add("uncompleted_task");
    newTaskDiv.innerHTML = `<div class="task">
                                <input type="checkbox" id="checkbox_${priority}" onclick="completeTask(this)">
                                <p class="task__text">${userInput}</p>
                            </div>
                            <div class="buttons"> 
                                <button >
                                    <img height="20" src="https://img.icons8.com/ios/20/FFFFFF/long-arrow-down.png" alt="long-arrow-down"/>
                                </button>
                                <button>
                                    <img height="20" src="https://img.icons8.com/ios/20/FA5252/trash--v1.png" alt="trash--v1"/>
                                </button>
                            </div>
                        
                `;
    uncompletedTasksList.appendChild(newTaskDiv);
    priority++;
    document.getElementById("task_input").value = "";
    countTasks();
    displayPlaceholderText();
  }
}
function completeTask(checkbox) {
  let subParentDiv = checkbox.parentElement;
  let parentDiv = subParentDiv.parentElement;
  //console.log(parentDiv);
  if (checkbox.checked) {
    parentDiv.classList.remove("uncompleted_task");
    parentDiv.classList.add("completed_task");
    completedTasksList.appendChild(parentDiv);
  } else {
    parentDiv.classList.remove("completed_task");
    parentDiv.classList.add("uncompleted_task");
    uncompletedTasksList.appendChild(parentDiv);
  }
  countTasks();
  displayPlaceholderText();
}

function countTasks() {
  let displayCount = document.getElementById("tasksCount");
  let tasksUncompletedCount =
    document.querySelectorAll(".uncompleted_task").length;
  let tasksCompletedCount = document.querySelectorAll(".completed_task").length;
  let totalTasksCount = tasksUncompletedCount + tasksCompletedCount;
  displayCount.textContent =
    totalTasksCount +
    " Total, " +
    tasksCompletedCount +
    " Completed, " +
    tasksUncompletedCount +
    " Pending.";
  //console.log(totalTasksCount);
}
function displayPlaceholderText() {
  let tasksUncompletedCount =
    document.querySelectorAll(".uncompleted_task").length;
  //console.log(tasksUncompletedCount);
  let tasksCompletedCount = document.querySelectorAll(".completed_task").length;

  let uncompletedPlaceholder = uncompletedTasksContainer.querySelector(
    ".placeholder-message"
  );
  let completedPlaceholder = completedTasksContainer.querySelector(
    ".placeholder-message"
  );

  if (tasksUncompletedCount === 0) {
    uncompletedPlaceholder.style.display = "block";
  } else {
    uncompletedPlaceholder.style.display = "none";
  }

  if (tasksCompletedCount === 0) {
    completedPlaceholder.style.display = "block";
  } else {
    completedPlaceholder.style.display = "none";
  }
}
