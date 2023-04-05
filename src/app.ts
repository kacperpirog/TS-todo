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

const tasks:
{name:string; done:boolean;
}[] = [{
    name:"nakramienia kota",
    done:false,
},{
    name:"zrobic coś",
    done:true,
},{
    name:"programowanie",
    done:false,
}
]


const render = () => {
    taskConteinerElement.innerHTML = ""
    tasks.forEach((task) => {
        const taskElement: HTMLElement = document.createElement("li")
        taskElement.innerHTML = task.name
        taskConteinerElement.appendChild(taskElement)
    })

};
const addTask = (taskName: string) => {
    tasks.push({name: taskName, done: false})
}
addButtonElement.addEventListener("click", (e: Event) => {
    e.preventDefault()
    addTask(taskNameInputElement.value)
    render()
})

render()