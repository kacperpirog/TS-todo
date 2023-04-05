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
    tasks.forEach((task, index) => {
        //         <li>
        // <label for="task-1">śmieci</label>
        // <input type="checkbox" id="task-1" name="smieci"/>
        // </li>
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("lable");
        labelElement.innerHTML = task.name;
        labelElement.setAttribute("for", id);
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
