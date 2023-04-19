const handleCategoryChange = (category) => {
    if (category === "general") {
        console.log("zmiana kategori na general ");
    }
    else if (category === "work") {
        alert("Lecisz na siłke ");
    }
    else if (category === "hobby") {
        document.body.style.background = "red";
    }
    else if (category === "gym") {
        document.body.style.background = "red";
    }
    else if (category === "JS") {
        document.body.style.background = "red";
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
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
