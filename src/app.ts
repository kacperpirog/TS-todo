import { Task } from "./classes/task.js";
import { renderCategories } from "./helpers/render-categories.helpers.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { Category } from "./types/types.js";

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
  new Task("nakramienia kota", false, Category.GENERAL),
  new Task("i psa", false, Category.WORK),
  new Task("zrobic coś", true, Category.GENERAL),
  new Task("programowanie", false),
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e: Event) => {
  e.preventDefault();
  const newTask: Task = new Task(
    taskNameInputElement.value,
    false,
    selectedCategory
  );
  addTask(newTask);
  newTask.LogCreationDate("!!!");
  renderTasks(tasks, taskContainerElement);
});
type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["baldy", Category.HOBBY, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

renderCategories(categories, categoriesContainerElement, updateSelectCategory);

renderTasks(tasks, taskContainerElement);

const taskClassInstance = new Task("smiecie", true);

