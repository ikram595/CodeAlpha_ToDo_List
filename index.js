var priority = 1;
var uncompletedTasksContainer =
  document.getElementsByClassName("uncompleted_tasks")[0];
var completedTasksContainer =
  document.getElementsByClassName("completed_tasks")[0];

function addTask() {
  let userInput = document.getElementById("task_input").value;
  //console.log(userInput);
  if (userInput !== "") {
    let newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task");
    newTaskDiv.innerHTML = `<p class="priority">${priority}.</p>
                    <div class="uncompleted_task">
                        <input type="checkbox" id="checkbox_${priority}" onclick="completeTask(this)">
                        <p class="task__text">${userInput}</p>
                        <div class="buttons"> 
                            <button onclick="priorityDown(this)">
                                <img height="20" src="https://img.icons8.com/ios/20/FFFFFF/long-arrow-down.png" alt="long-arrow-down"/>
                            </button>
                            <button>
                                <img height="20" src="https://img.icons8.com/ios/20/FA5252/trash--v1.png" alt="trash--v1"/>
                            </button>
                        </div>
                `;
    displayPlaceholderText();
    uncompletedTasksContainer.appendChild(newTaskDiv);
    priority++;
    document.getElementById("task_input").value = "";
    countTasks();
  }
}
function completeTask(checkbox) {
  let taskDiv = checkbox.parentElement;
  let priority = taskDiv.querySelector(".priority");

  if (checkbox.checked) {
    taskDiv.classList.remove("uncompleted_task");
    taskDiv.classList.add("completed_task");
    completedTasksContainer.appendChild(taskDiv);
  } else {
    taskDiv.classList.remove("completed_task");
    taskDiv.classList.add("uncompleted_task");
    uncompletedTasksContainer.appendChild(taskDiv);
    // Restore the original priority
    let priorityElement = taskDiv.querySelector(".priority");
    let originalPriority = parseInt(priorityElement.textContent);
    priorityElement.textContent = originalPriority + ".";
  }
  countTasks();
  displayPlaceholderText();
}
function priorityDown(taskDiv) {
  let priorityElement = taskDiv.querySelector(".priority");
  priorityElement.textContent = parseInt(priorityElement.textContent) - 1 + ".";
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
    document.querySelectorAll(".uncompleted_task").length + 1;
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
