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
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
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
renderCategories();
addTask({ name: "gitarra", category: "JS", done: false });
render(tasks, taskContainerElement);
