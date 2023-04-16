import { Task } from "../types/types";

export const renderTasks = (
  tasks: Task[],
  taskContainerElement: HTMLElement
) => {
  taskContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }

    const id: string = `task-${index}`;

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerHTML = task.name;
    labelElement.setAttribute("for", id);
    const CheckBoxElement: HTMLInputElement = document.createElement("input");
    CheckBoxElement.type = "checkbox";
    CheckBoxElement.name = task.name;
    CheckBoxElement.id = id;
    CheckBoxElement.checked = task.done;
    CheckBoxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(CheckBoxElement);
    taskContainerElement.appendChild(taskElement);
  });
};
