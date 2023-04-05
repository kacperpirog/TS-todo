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
    taskConteinerElement.innerHTML = "";
    tasks.forEach((task, index) => {
//         <li>
// <label for="task-1">śmieci</label>
// <input type="checkbox" id="task-1" name="smieci"/>
// </li>
        const taskElement: HTMLElement = document.createElement("li");
        const id: string = `task-${index}`;

        const labelElement: HTMLLabelElement = document.createElement("lable")
        labelElement.innerHTML = task.name;
        labelElement.setAttribute("for", id)
    });

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