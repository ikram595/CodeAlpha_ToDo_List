function addTask() {
  let userInput = document.getElementById("task_input").value;
  const existingTask = Array.from(
    document.querySelectorAll(".task p b") //array fih all tasks ' text(p fih b)
  ).filter((task) => task.textContent.trim() === userInput);
  if (userInput !== "" && existingTask.length === 0) {
    let newTask = document.createElement("div");
    let parentDiv = document.getElementById("tasks");
    newTask.classList.add("task");
    newTask.innerHTML = `<p><b>${userInput}</b></p>
                    <div class="task-icons">
                        <i class="fa-solid fa-check-double" style="color: #44ff00;" onclick=completeTask(this)></i>
                        <i class="fa-solid fa-pen-to-square" style="color: #005eff;" onclick=editTask(this)></i>
                        <i class="fa-solid fa-trash" style="color: #ff0000;" onclick=deleteTask(this)></i>
                    </div>`;
    parentDiv.appendChild(newTask);
    countTasks();
    displayPlaceHolderText();
  } else if (existingTask.length > 0) {
    //task exists
    alert("Task already exists!");
  }
  document.getElementById("task_input").value = "";
}
function deleteTask(icon) {
  let parentDiv = icon.parentElement.parentElement;
  parentDiv.remove();
  countTasks();
  displayPlaceHolderText();
}
let editingTask = null;
function editTask(icon) {
  let parentDiv = icon.parentElement.parentElement;
  const taskText = parentDiv.querySelector("p > b").textContent;
  document.getElementById("task_input").value = taskText;
  const addButton = document.querySelector(".task-form button");
  addButton.textContent = "Edit";
  addButton.onclick = editTaskSubmit;
  editingTask = parentDiv;
}
function editTaskSubmit() {
  const userInput = document.getElementById("task_input").value.trim();
  if (userInput !== "") {
    const taskDiv = editingTask;
    const taskText = taskDiv.querySelector("p > b");
    taskText.textContent = userInput;
    editingTask = null; //reset=> button="Add"
    const addButton = document.querySelector(".task-form button");
    addButton.textContent = "Add";
    addButton.onclick = addTask;

    countTasks();
    displayPlaceHolderText();
    document.getElementById("task_input").value = "";
  }
}
function completeTask(icon) {
  let subParentDiv = icon.parentElement;
  let parentDiv = subParentDiv.parentElement;
  parentDiv.classList.add("completed");
  countTasks();
  displayPlaceHolderText();
}
function displayPlaceHolderText() {
  let tasksCount = document.querySelectorAll(".task").length;
  let text = document.querySelector(".placeholder-message");
  if (tasksCount === 0) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
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
