import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        document.body.style.background = "linear-gradient(45deg, #7912ed, #e5e5e5)";
    }
    else if (category === Category.GYM) {
        alert("go to the gym nowwww!!!");
    }
    else if (category === Category.HOBBY) {
        document.body.style.background = "linear-gradient(45deg, #ed1255, #e5e5e5)";
    }
    else if (category === Category.WORK) {
        document.body.style.background = "linear-gradient(45deg, #12ed93, #e5e5e5)";
    }
    else if (category === Category.JS) {
        document.body.style.background = "linear-gradient(45deg, #ed5a12, #e5e5e5)";
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const renderCategories = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
