import { Task } from "./classes/task.js";
import { renderCategories } from "./helpers/render-categories.helpers.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { Category } from "./types/types.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const taskContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.GYM,
    Category.HOBBY,
    Category.WORK,
    Category.JS,
];
const tasks = [
    new Task("feed the cat", false, Category.GENERAL),
    new Task("feed the dog", false, Category.WORK),
    new Task("do something ", true, Category.GENERAL),
    new Task("coding", false),
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.LogCreationDate("!!!");
    renderTasks(tasks, taskContainerElement);
});
const task = ["baldy", Category.HOBBY, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
renderCategories(categories, categoriesContainerElement, updateSelectCategory);
renderTasks(tasks, taskContainerElement);
const taskClassInstance = new Task("gym", true);
