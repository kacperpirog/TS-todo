const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const taskContainerElement = document.querySelector(".tasks");
const categories = ["General", "work", "sport", "hobby", "JS"];
const tasks = [
    {
        name: "nakramienia kota",
        done: false,
    }, {
        name: "zrobic coś",
        done: true,
    }, {
        name: "programowanie",
        done: false,
    }
];
const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        //         <li>
        // <label for="task-1">śmieci</label>
        // <input type="checkbox" id="task-1" name="smieci"/>
        // </li>
        const taskElement = document.createElement("li");
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
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false });
    render();
});
render();
