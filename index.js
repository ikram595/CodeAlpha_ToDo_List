function addTask() {
  let userInput = document.getElementById("task_input").value;
  //console.log(userInput);
  if (userInput !== "") {
    let newTask = document.createElement("div");
    let parentDiv = document.getElementById("tasks");
    newTask.classList.add("task");
    newTask.innerHTML = `<p><b>${userInput}</b></p>
                    <div class="task-icons">
                        <i class="fa-solid fa-check-double" style="color: #44ff00;" onclick=completeTask(this)></i>
                        <i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i>
                        <i class="fa-solid fa-trash" style="color: #ff0000;"></i>
                    </div>`;
    parentDiv.appendChild(newTask);
    document.getElementById("task_input").value = "";
    countTasks();
    displayPlaceHolderText();
  }
}
function deleteTask() {}
function editTask() {}
function completeTask(icon) {
  let subParentDiv = icon.parentElement;
  let parentDiv = subParentDiv.parentElement;
  parentDiv.classList.add("completed");
}
function displayPlaceHolderText() {
  let tasksCount = document.querySelectorAll(".task").length;
  let text = document.querySelector(".placeholder-message");
  if (tasksCount !== 0) {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}
function countTasks() {
  let displayCount = document.getElementById("tasks-count");
  let totalTasksCount = document.querySelectorAll(".task").length;
  let tasksCompletedCount = document.querySelectorAll(".completed").length;
  let tasksUncompletedCount = totalTasksCount - tasksCompletedCount;

  displayCount.textContent =
    totalTasksCount +
    " Total, " +
    tasksCompletedCount +
    " Completed, " +
    tasksUncompletedCount +
    " Pending.";
  //console.log(totalTasksCount);
}
