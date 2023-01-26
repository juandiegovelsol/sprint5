const addButton = document.querySelector(".AddTaskButton");

addButton.addEventListener("click", () => {
  const newText = document.querySelector(".taskInput");

  if (newText.value) {
    const newTaskP = document.createElement("p");
    newTaskP.classList.add("taskListItem");

    const newTaskInput = document.createElement("input");
    newTaskInput.type = "checkbox";
    newTaskInput.classList.add("taskItem");

    const newTaskLabel = document.createElement("label");
    newTaskLabel.innerText = newText.value;
    newTaskLabel.classList.add("taskItemLabel");

    newTaskP.appendChild(newTaskInput);
    newTaskP.appendChild(newTaskLabel);

    const list = document.querySelector(".taskListForm");
    list.appendChild(newTaskP);
  }
  newText.value = "";
});
