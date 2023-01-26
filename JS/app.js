const addButton = document.querySelector(".addTaskButton");
const deleteButton = document.querySelector(".deleteButton");

const firstToUpperCase = (str) => {
  const response = str.charAt(0).toUpperCase() + str.slice(1);
  return response;
};

addButton.addEventListener("click", () => {
  const newText = document.querySelector(".taskInput");

  if (newText.value) {
    const onlyText = firstToUpperCase(newText.value);

    const newTaskP = document.createElement("p");
    newTaskP.classList.add("taskListItem");

    const newTaskInput = document.createElement("input");
    newTaskInput.type = "checkbox";
    newTaskInput.classList.add("taskItem");

    const newTaskLabel = document.createElement("label");
    newTaskLabel.innerText = onlyText;
    newTaskLabel.classList.add("taskItemLabel");

    newTaskP.appendChild(newTaskInput);
    newTaskP.appendChild(newTaskLabel);

    const list = document.querySelector(".taskListForm");
    list.appendChild(newTaskP);
  }
  newText.value = "";
});

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
});
