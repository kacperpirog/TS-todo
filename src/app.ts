const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

type Category = "general" | "work" | "gym" | "hobby" | "JS";

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}
const categories: Category[] = ["general", "work", "gym", "hobby", "JS"];

const tasks: Task[] = [
  {
    name: "nakramienia kota",
    done: false,
    category: "general",
  },
  {
    name: "i psa",
    done: false,
    category: "work",
  },
  {
    name: "zrobic coś",
    done: true,
    category: "gym",
  },
  {
    name: "programowanie",
    done: false,
    category: "JS",
  },
];

const render = () => {
  taskContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }

    const id: string = `task-${index}`;

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerHTML = task.name;
    labelElement.setAttribute("for", id);
    const CheckBoxElement: HTMLInputElement = document.createElement("input");
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

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      selectedCategory = category;
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};
addButtonElement.addEventListener("click", (e: Event) => {
  e.preventDefault();
  addTask({
    name: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  render();
});
renderCategories();
addTask({ name: "gitarra", category: "JS", done: false });
render();
