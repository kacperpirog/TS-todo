import { renderCategories } from "./helpers/render-categories.helpers.js";
import { render } from "./helpers/render-tasks.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const taskContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby", "JS"];
const tasks = [
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
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, taskContainerElement);
});
renderCategories(categories, categoriesContainerElement, selectedCategory);
addTask({ name: "gitarra", category: "JS", done: false });
render(tasks, taskContainerElement);
