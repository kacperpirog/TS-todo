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
renderCategories(categories, categoriesContainerElement, updateSelectCategory);
addTask({ name: "gitarra", category: Category.JS, done: false });
renderTasks(tasks, taskContainerElement);
