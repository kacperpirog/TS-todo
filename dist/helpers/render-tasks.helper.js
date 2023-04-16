export const render = (tasks, taskContainerElement) => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerHTML = task.name;
        labelElement.setAttribute("for", id);
        const CheckBoxElement = document.createElement("input");
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
