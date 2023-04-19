import { TaskClass } from "./classes/task.js";
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
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, taskContainerElement);
});
const task = ["baldy", Category.HOBBY, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
addTask({ name: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerElement, updateSelectCategory);
renderTasks(tasks, taskContainerElement);
const taskClassInstance = new TaskClass("smiecie", true);
console.log(taskClassInstance);
