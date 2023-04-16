const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesConteinerElement: HTMLElement =
  document.querySelector(".categories");

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
    name: "nakramienia kota",
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

const renderCategory = () => {
  //   <li>
  //   <input
  //     type="radio"
  //     name="category"
  //     value="general"
  //     id="category-general"
  //   />
  //   <label for="category-general">general</label>
  // </li>
  categories.forEach((category) => {
    const categoryElemet: HTMLElement = document.createElement("li");

    const radioImputElement: HTMLInputElement = document.createElement("input");
    radioImputElement.type = "radio";
    radioImputElement.name = "category";
    radioImputElement.value = category;
    radioImputElement.id = `category-${category}`;
    categoryElemet.appendChild(radioImputElement);

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category${category}`);
    labelElement.innerHTML = category;

    categoriesConteinerElement.appendChild(categoryElemet);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};
addButtonElement.addEventListener("click", (e: Event) => {
  const selectRadioElement: HTMLInputElement = document.querySelector(
    "input[type='radio']:chceked"
  );
  const selectCategory: Category = selectRadioElement.value as Category;
  e.preventDefault();
  addTask({
    name: taskNameInputElement.value,
    done: false,
    category: selectCategory,
  });
  render();
});
renderCategory();
addTask({ name: "gitarra", category: "JS", done: false });
render();
