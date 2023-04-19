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
    new Task("nakramienia kota", false, Category.GENERAL),
    new Task("i psa", false, Category.WORK),
    new Task("zrobic coś", true, Category.GENERAL),
    new Task("programowanie", false),
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
const taskClassInstance = new Task("smiecie", true);
taskClassInstance.LogCreationDate("!");
