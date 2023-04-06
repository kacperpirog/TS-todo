const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const taskContainerElement : HTMLElement = document.querySelector(".tasks")

interface Task {
    name:string;
    done:boolean;
}
const categories:string[] = ["General", "work", "sport","hobby","JS" ]

const tasks:Task[] = [
    {
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
    taskContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
//         <li>
// <label for="task-1">śmieci</label>
// <input type="checkbox" id="task-1" name="smieci"/>
// </li>
        const taskElement: HTMLElement = document.createElement("li");
        const id: string = `task-${index}`;

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.innerHTML = task.name;
        labelElement.setAttribute("for", id);
        const CheckBoxElement: HTMLInputElement = document.createElement("input")
        CheckBoxElement.type = "checkbox";
        CheckBoxElement.name=task.name;
        CheckBoxElement.id = id;
        CheckBoxElement.checked = task.done;
        CheckBoxElement.addEventListener("change",() => {
            task.done = !task.done;
        })
    
        taskElement.appendChild(labelElement);
        taskElement.appendChild(CheckBoxElement);
        taskContainerElement.appendChild(taskElement);
    });

};
const addTask = (task : Task) => {
    tasks.push(task)
}
addButtonElement.addEventListener("click", (e: Event) => {
    e.preventDefault()
    addTask({name: taskNameInputElement.value, done: false})
    render() 
})

render()