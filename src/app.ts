// <li>
// <label for="task-1">śmieci</label>
// <input type="checkbox" id="task-1" name="smieci"/>
// </li>


// nakramienia kota 
//zrobic coś
// programowac 

const taskConteinerElement : HTMLElement = document.querySelector(".tasks")

const tasks: string[] = ["nakramienia kota","zrobic coś", "programowac "]

const render = () => {
    tasks.forEach((task) => {
        const taskElement: HTMLElement = document.createElement("li")
        taskElement.innerHTML = task
        taskConteinerElement.appendChild(taskElement)
    })

}
render()