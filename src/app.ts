// <li>
// <label for="task-1">śmieci</label>
// <input type="checkbox" id="task-1" name="smieci"/>
// </li>


// nakramienia kota 
//zrobic coś
// programowac 
const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const taskConteinerElement : HTMLElement = document.querySelector(".tasks")

const tasks: string[] = ["nakramienia kota","zrobic coś", "programowac "]

const render = () => {
    taskConteinerElement.innerHTML = ""
    tasks.forEach((task) => {
        const taskElement: HTMLElement = document.createElement("li")
        taskElement.innerHTML = task
        taskConteinerElement.appendChild(taskElement)
    })

};
const addTask = (task: string) => {
    tasks.push(task)
}
addButtonElement.addEventListener("click", (e: Event) => {
    e.preventDefault()
    tasks.push(taskNameInputElement.value)
    render()
})

render()