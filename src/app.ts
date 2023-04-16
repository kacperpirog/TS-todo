import { renderCategories } from "./helpers/render-categories.helpers.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { Category, Task } from "./types/types";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

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

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e: Event) => {
  e.preventDefault();
  addTask({
    name: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks(tasks, taskContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectCategory);
addTask({ name: "gitarra", category: "JS", done: false });
renderTasks(tasks, taskContainerElement);
