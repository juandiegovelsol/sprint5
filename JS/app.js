const addButton = document.querySelector(".addTaskButton");
const newText = document.querySelector(".taskInput");
const list = document.querySelector(".taskListForm");
const listWrapper = document.querySelector(".taskListWrapper");
const taskListPlaceholder = document.querySelector(".taskListPlaceholder");
var deleteButton = 0;

const firstToUpperCase = (str) => {
  const response = str.charAt(0).toUpperCase() + str.slice(1);
  return response;
};

addButton.addEventListener("click", () => {
  if (newText.value) {
    const onlyText = firstToUpperCase(newText.value);

    const newTaskP = document.createElement("p");
    newTaskP.classList.add("taskListItem");

    const newTaskLabel = document.createElement("label");
    newTaskLabel.classList.add("taskItemLabel");

    const newTaskInput = document.createElement("input");
    newTaskInput.type = "checkbox";
    newTaskInput.classList.add("taskItem");

    const newTaskSpan = document.createElement("span");
    newTaskSpan.classList.add("checkmark");

    newTaskLabel.innerText = onlyText;
    newTaskLabel.appendChild(newTaskInput);
    newTaskLabel.appendChild(newTaskSpan);
    newTaskP.appendChild(newTaskLabel);
    list.appendChild(newTaskP);
    taskListPlaceholder.classList.add("hidden");

    if (!deleteButton) {
      deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton");
      deleteButton.innerText = "Delete all done";

      deleteButton.addEventListener("click", () => {
        const inputToRemove = document.querySelectorAll(
          'input[type="checkbox"]:checked'
        );
        if (inputToRemove.length) {
          inputToRemove.forEach((element) => {
            const pToRemove = element.closest("p");
            const list = document.querySelector(".taskListForm");
            list.removeChild(pToRemove);
          });
        }

        const inputsLeft = document.querySelectorAll(".taskItem");
        if (!inputsLeft.length) {
          listWrapper.removeChild(deleteButton);
          deleteButton = 0;
          listWrapper.appendChild(taskListPlaceholder);
        }
      });

      taskListPlaceholder.classList.remove("hidden");
      listWrapper.removeChild(taskListPlaceholder);
      listWrapper.appendChild(deleteButton);
    }
  }
  newText.value = "";
});
