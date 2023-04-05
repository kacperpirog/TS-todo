// <li>
// <label for="task-1">śmieci</label>
// <input type="checkbox" id="task-1" name="smieci"/>
// </li>
// nakramienia kota 
//zrobic coś
// programowac 
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const taskConteinerElement = document.querySelector(".tasks");
const tasks = [{
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
    taskConteinerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = task.name;
        taskConteinerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
render();
