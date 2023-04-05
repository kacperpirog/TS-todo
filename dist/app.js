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
const tasks = ["nakramienia kota", "zrobic coś", "programowac "];
const render = () => {
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = task;
        taskConteinerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
});
render();
