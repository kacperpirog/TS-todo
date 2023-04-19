import { TaskClass } from "./classes/task.js";
import { renderCategories } from "./helpers/render-categories.helpers.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { Category, Task } from "./types/types.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL,
  Category.GYM,
  Category.HOBBY,
  Category.WORK,
  Category.JS,
];

const tasks: Task[] = [
  {
    name: "nakramienia kota",
    done: false,
    category: Category.GENERAL,
  },
  {
    name: "i psa",
    done: false,
    category: Category.WORK,
  },
  {
    name: "zrobic coś",
    done: true,
    category: Category.GYM,
  },
  {
    name: "programowanie",
    done: false,
    category: Category.WORK,
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
type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["baldy", Category.HOBBY, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });

renderCategories(categories, categoriesContainerElement, updateSelectCategory);

renderTasks(tasks, taskContainerElement);

const taskClassInstance = new TaskClass("smiecie", true);

console.log(taskClassInstance);
