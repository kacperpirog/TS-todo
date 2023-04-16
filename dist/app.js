const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const taskContainerElement = document.querySelector(".tasks");
const categories = ["general", "work", "gym", "hobby", "JS"];
const tasks = [
    {
        name: "nakramienia kota",
        done: false,
        categoty: "general",
    },
    {
        name: "nakramienia kota",
        done: false,
        categoty: "work",
    },
    {
        name: "zrobic coś",
        done: true,
        categoty: "gym",
    },
    {
        name: "programowanie",
        done: false,
        categoty: "JS",
    },
];
const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.categoty) {
            taskElement.classList.add(task.categoty);
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
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (e) => {
    const selectRadioElement = document.querySelector("input[type='radio']:chceked");
    const selectCategory = selectRadioElement.value;
    e.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        categoty: selectCategory,
    });
    render();
});
addTask({ name: "zrobić kaltkę", categoty: "JS", done: false });
render();
